import React from 'react';
import { convertToCurrency } from '../../../helpers/index';

const StockList = ({ portfolio }) => {
  const getHeaders = () => {
    const headers = ['Symbol', 'Shares', 'Value', 'Change'];
    return (
      <tr className="stock-list-headers stock-list-row">
        {headers.map((header, i) => (
          <th key={`${header}_${i}`} className="stock-list-table-header">
            {header}
          </th>
        ))}
      </tr>
    );
  };

  const getStock = symbol => {
    if (!portfolio[symbol]) return;
    const { amount, currentPrice } = portfolio[symbol];
    const value = !currentPrice ? '' : currentPrice * amount;

    return (
      <tr key={symbol} className="stock-list-row">
        <td>{symbol}</td>
        <td>{amount}</td>
        <td>{convertToCurrency(value)}</td>
      </tr>
    );
  };

  const renderAllStocks = () => {
    const symbols = Object.keys(portfolio);
    if (symbols.length === 0) return;
    return symbols.map(symbol => getStock(symbol));
  };

  return (
    <div id="stock-list-container">
      <table id="stock-list-table">
        <thead>{getHeaders()}</thead>
        <tbody>{renderAllStocks()}</tbody>
      </table>
    </div>
  );
};

export default StockList;
