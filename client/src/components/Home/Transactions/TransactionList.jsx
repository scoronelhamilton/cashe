import React from 'react';

const TransactionList = ({ transactions }) => {
  const getTransaction = txn => {
    return (
      <tr>
        {`${txn.type.toUpperCase()} (${txn.ticker.toUpperCase()}) - ${txn.shares} Shares @
        ${txn.costPerShare.toFixed(2)}`}
      </tr>
    );
  };

  return (
    <div>
      <table>
        <tbody>{transactions.map(txn => getTransaction(txn))}</tbody>
      </table>
    </div>
  );
};
export default TransactionList;
