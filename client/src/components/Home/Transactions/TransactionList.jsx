import React from 'react';
import { convertToCurrency, formatDate } from '../../../helpers/index';

const TransactionList = ({ transactions }) => {
  const getHeaders = () => {
    const headers = ['Date', 'Type', 'Symbol', 'Shares', 'Price', 'Net Value'];
    return (
      <tr>
        {headers.map(header => (
          <th className="table-header">{header}</th>
        ))}
      </tr>
    );
  };
  const getTransaction = txn => {
    const { _id, date, type, symbol, amount, price, netValue } = txn;
    return (
      <tr key={_id} className="transaction-row">
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
    <div className="transaction-table-wrapper">
      <table className="transaction-table">
        <thead>{getHeaders()}</thead>
        <tbody>{transactions.map(txn => getTransaction(txn))}</tbody>
      </table>
    </div>
  );
};
export default TransactionList;
