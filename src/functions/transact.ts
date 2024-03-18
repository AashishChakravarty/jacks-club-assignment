import dynamodb from '../helpers/dynamodbClient';

interface TransactRequest {
  userId: string;
  amount: number;
  type: 'credit' | 'debit';
}

interface TransactResponse {
  success: boolean;
  message?: string;
}

export async function transact(
  request: TransactRequest
): Promise<TransactResponse> {
  try {
    const params = {
      TableName: 'account',
      Key: {
        userId: request.userId,
      },
      UpdateExpression:
        'SET #balance = if_not_exists(#balance, :default) + :amount',
      ExpressionAttributeNames: {
        '#balance': 'balance',
      },
      ExpressionAttributeValues: {
        ':amount': request.type === 'debit' ? -request.amount : request.amount,
        ':default': 100, // Default balance
      },
      ConditionExpression:
        'attribute_exists(userId) AND #balance + :amount >= :default',
    };

    await dynamodb.update(params).promise();
    return {
      success: true,
    };
  } catch (error) {
    console.error('Error processing transaction:', error);
    return {
      success: false,
      message: 'Error processing transaction',
    };
  }
}
