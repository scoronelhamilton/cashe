import React from 'react';

const TransactionList = ({ transactions }) => {
  const getHeaders = () => {
    return (
      <tr>
        <th>Type</th>
        <th>Symbol</th>
        <th>Shares</th>
        <th>Price</th>
      </tr>
    );
  };
  const getTransaction = txn => {
    const { _id, type, symbol, amount, price } = txn;
    return (
      <tr key={_id}>
        <td>{type.toUpperCase()}</td>
        <td>{symbol.toUpperCase()}</td>
        <td>{amount}</td>
        <td>{`$${price.toFixed(2)}`}</td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>{getHeaders()}</thead>
        <tbody>{transactions.map(txn => getTransaction(txn))}</tbody>
      </table>
    </div>
  );
};
export default TransactionList;
