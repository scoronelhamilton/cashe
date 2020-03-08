import React from 'react';
import { convertToCurrency } from '../../../helpers/index';

const Overview = ({ user, portfolio, portfolioValue, setModalIsOpen }) => {
  const getTotalStocks = () =>
    !user ? '' : `Total stocks: ${Object.keys(portfolio).length}`;

  const getAvailableCash = () =>
    !user ? '' : `Available cash: ${convertToCurrency(user.cash)}`;

  const getPortfolioValue = () =>
    !portfolioValue ? '$' : `${convertToCurrency(portfolioValue)}`;

  return (
    <div id="overview-container">
      <div className="upper-section-ovw">
        <div className="portfolio-info-section">
          <p>Portfolio Value</p>
          <p id="portfolio-value">{getPortfolioValue()}</p>
          <span id="updated-date">As of 12/03/2020</span>
        </div>
      </div>
      <div className="lower-section-ovw">
        <div className="portfolio-details">
          <p>{getTotalStocks()}</p>
          <p>{getAvailableCash()}</p>
        </div>
        <div className="trade-buttons">
          <button className="buy-btn" type="button" onClick={() => setModalIsOpen(true)}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
