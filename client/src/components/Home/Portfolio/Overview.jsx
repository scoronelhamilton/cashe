import React from 'react';
import { convertToCurrency } from '../../../helpers/index';

const Overview = ({ user, setModalIsOpen }) => {
  const getTotalStocks = () =>
    !user ? '' : `Total stocks: ${Object.keys(user.portfolio).length}`;

  const getAvailableCash = () =>
    !user ? '' : `Available cash: ${convertToCurrency(user.cash)}`;
  return (
    <div id="overview-container">
      <div className="upper-section-ovw">
        <div className="portfolio-info-section">
          <p>Portfolio Value</p>
          <p id="portfolio-value">$100,000.00</p>
          <span id="updated-date">As of 12/03/2020</span>
        </div>
      </div>
      <div className="lower-section-ovw">
        <div className="portfolio-details">
          <p>{getTotalStocks()}</p>
          <p>Return: 5%</p>
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
