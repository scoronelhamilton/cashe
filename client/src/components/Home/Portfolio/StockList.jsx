import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { convertToCurrency } from '../../../helpers/index';

const StockList = ({ portfolio, openingPrices }) => {
  const getHeaders = () => {
    const headers = ['Symbol', 'Shares', 'Value', 'Change'];
    return (
      <tr className="stock-list-headers stock-list-row">
        {headers.map((header, i) => (
          <th key={`${header}_${i}`} className="table-header">
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
    // const change = getPriceChange(symbol, currentPrice);

    return (
      <tr key={symbol} className="stock-list-row">
        <td>{symbol}</td>
        <td>{amount}</td>
        <td>{convertToCurrency(value)}</td>
        {getPriceChange(symbol, currentPrice)}
      </tr>
    );
  };

  const getPriceChange = (symbol, currentPrice) => {
    const opening = openingPrices[symbol];
    if (!opening || !currentPrice) return <td></td>;

    const absoluteDifference = (currentPrice - opening).toFixed(2);
    const relativeDifference = ((absoluteDifference / opening) * 100).toFixed(2);

    if (absoluteDifference === 0) {
      return <td>{`${absoluteDifference} (${relativeDifference}%)`}</td>;
    } else if (absoluteDifference > 0) {
      return (
        <td style={{ color: 'green' }}>
          {`${absoluteDifference} (${relativeDifference}%)`}
          <FontAwesomeIcon className="performance-arrow" icon="long-arrow-alt-up" />
        </td>
      );
    } else {
      return (
        <td style={{ color: 'red' }}>
          {`${absoluteDifference} (${relativeDifference}%)`}
          <FontAwesomeIcon className="performance-arrow" icon="long-arrow-alt-down" />
        </td>
      );
    }
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
