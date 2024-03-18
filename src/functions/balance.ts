import dynamodb from '../helpers/dynamodbClient';

interface BalanceRequest {
  userId: string;
}

interface BalanceResponse {
  userId: string;
  balance: number;
}

const DEFAULT_BALANCE = 100;

export async function getBalance(
  request: BalanceRequest
): Promise<BalanceResponse> {
  try {
    const params = {
      TableName: 'account',
      Key: {
        userId: request.userId,
      },
    };

    const data = await dynamodb.get(params).promise();
    if (!data || !data.Item || !data.Item.balance) {
      return {
        userId: request.userId,
        balance: DEFAULT_BALANCE,
      };
    }

    return {
      userId: request.userId,
      balance: data.Item.balance,
    };
  } catch (error) {
    console.error('Error retrieving balance:', error);
    throw new Error('Error retrieving balance');
  }
}
