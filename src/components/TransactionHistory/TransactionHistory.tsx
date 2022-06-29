import React from 'react';
import css from './TransactionHistory.module.css';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <>
      <table className={css.transactionHistory}>
        <thead>
          <tr className={css.transactionRowHead}>
            <th className={css.cell}>Type</th>
            <th className={css.cell}>Amount</th>
            <th className={css.cell}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => {
            return (
              <tr className={css.transactionRow} key={transaction.id}>
                <td className={`${css.cell} ${css.data}`}>{transaction.type}</td>
                <td className={`${css.cell} ${css.data}`}>{transaction.amount}</td>
                <td className={`${css.cell} ${css.data}`}>{transaction.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
