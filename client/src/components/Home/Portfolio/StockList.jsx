import React from 'react';
import { convertToCurrency } from '../../../helpers/index';

const StockList = ({ portfolio, currentPrices }) => {
  const getHeaders = () => {
    const headers = ['Symbol', 'Shares', 'Value', 'Change'];
    return (
      <tr className="stock-list-headers stock-list-row">
        {headers.map(header => (
          <th className="stock-list-table-header">{header}</th>
        ))}
      </tr>
    );
  };

  const getStock = (symbol, i) => {
    const amount = portfolio[symbol];
    const value = currentPrices[i] ? currentPrices[i].price * amount : 0;

    return (
      <tr key={symbol} className="stock-list-row">
        <td>{symbol}</td>
        <td>{amount}</td>
        <td>{convertToCurrency(value)}</td>
      </tr>
    );
  };

  return (
    <div id="stock-list-container">
      <table id="stock-list-table">
        <thead>{getHeaders()}</thead>
        <tbody>{Object.keys(portfolio).map((symbol, i) => getStock(symbol, i))}</tbody>
      </table>
    </div>
  );
};

export default StockList;
