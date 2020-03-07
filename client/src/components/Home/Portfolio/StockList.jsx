import React from 'react';
import { convertToCurrency } from '../../../helpers/index';

const StockList = ({ portfolio, currentPrices }) => {
  const getHeaders = () => {
    return (
      <tr>
        <th>Symbol</th>
        <th>Shares</th>
        <th>Value</th>
      </tr>
    );
  };

  const getStock = symbol => {
    return (
      <tr key={symbol}>
        <td>{symbol}</td>
        <td>{portfolio[symbol]}</td>
      </tr>
    );
  };

  return (
    <div>
      <table>
        <thead>{getHeaders()}</thead>
        <tbody>{Object.keys(portfolio).map(symbol => getStock(symbol))}</tbody>
      </table>
    </div>
  );
};

export default StockList;
