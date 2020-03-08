import React from 'react';

const Overview = () => {
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
          <p>Stocks: 5</p>
          <p>Return: 5%</p>
        </div>
        <div className="trade-buttons">
          <button type="button" id="buy-btn">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
