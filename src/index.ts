import { getBalance } from './functions/balance';
import { transact } from './functions/transact';

async function main() {
  const userId = 'user123';

  // Retrieve balance
  const balance = await getBalance({ userId });
  console.log('Current balance:', balance);

  // Perform a transaction (credit)
  const creditTransaction = await transact({
    userId,
    amount: 50,
    type: 'credit',
  });
  console.log('Credit transaction:', creditTransaction);

  // Perform a transaction (debit)
  const debitTransaction = await transact({
    userId,
    amount: 20,
    type: 'debit',
  });
  console.log('Debit transaction:', debitTransaction);
}

main().catch(console.error);
