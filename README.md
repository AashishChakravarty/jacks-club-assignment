# TypeScript DynamoDB Project

This project is a simple TypeScript project that demonstrates integration with AWS DynamoDB. It includes functions to retrieve a user's balance and perform transactions (credit/debit) on their balance.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [TypeScript](https://www.typescriptlang.org/)
- [AWS SDK](https://aws.amazon.com/sdk-for-javascript/)

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd jacks-club-assignment
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Set up your AWS credentials by either configuring the AWS CLI or setting environment variables.

2. Update the DynamoDB table name in the `balance.ts` and `transact.ts` files with your actual DynamoDB table name.

3. Compile TypeScript files:

    ```bash
    npx tsc
    ```

4. Run the project:

    ```bash
    node dist/main.js
    ```

## Project Structure

- `src/`: Contains TypeScript source files.
    - `helpers/dynamodbClient.ts`: Initializes the DynamoDB client.
    - `functions/`: Contains functions to interact with DynamoDB.
        - `balance.ts`: Function to retrieve a user's balance.
        - `transact.ts`: Function to perform transactions on a user's balance.
- `dist/`: Contains compiled JavaScript files.
- `tsconfig.json`: TypeScript configuration file.
- `.gitignore`: Specifies intentionally untracked files to ignore.
- `package.json`: Project configuration file.
