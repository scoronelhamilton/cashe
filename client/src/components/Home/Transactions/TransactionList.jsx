import React from 'react';
import { convertToCurrency, formatDate } from '../../../helpers/index';

const TransactionList = ({ transactions }) => {
  const getHeaders = () => {
    return (
      <tr>
        <th>Date</th>
        <th>Type</th>
        <th>Symbol</th>
        <th>Shares</th>
        <th>Price</th>
        <th>Net Value</th>
      </tr>
    );
  };
  const getTransaction = txn => {
    const { _id, date, type, symbol, amount, price, netValue } = txn;
    return (
      <tr key={_id}>
        <td>{formatDate(date)}</td>
        <td>{type.toUpperCase()}</td>
        <td>{symbol.toUpperCase()}</td>
        <td>{amount}</td>
        <td>{convertToCurrency(price)}</td>
        <td>{convertToCurrency(netValue)}</td>
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
