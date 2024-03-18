import AWS from 'aws-sdk';

// Update AWS configuration with your credentials and region
AWS.config.update({
  region: 'your-region', // Replace 'your-region' with your AWS region
  accessKeyId: 'your-access-key-id', // Replace 'your-access-key-id' with your AWS access key ID
  secretAccessKey: 'your-secret-access-key', // Replace 'your-secret-access-key' with your AWS secret access key
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

export default dynamodb;
