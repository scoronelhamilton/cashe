import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { convertToCurrency } from '../../../helpers/index';

const Overview = ({
  user,
  portfolio,
  portfolioValue,
  setModalIsOpen,
  refresh,
  setRefresh,
  lastUpdate,
}) => {
  const getTotalStocks = () =>
    !user ? '' : `Total stocks: ${Object.keys(portfolio).length}`;

  const getAvailableCash = () =>
    !user ? '' : `Available cash: ${convertToCurrency(user.cash)}`;

  const getPortfolioValue = () =>
    !portfolioValue ? '$0' : `${convertToCurrency(portfolioValue)}`;

  const getUpdateSection = () =>
    !lastUpdate ? (
      ''
    ) : (
      <span id="updated-date">
        {`As of ${moment(lastUpdate).format('LLL')}`}
        <button id="refresh-button" type="button" onClick={() => setRefresh(!refresh)}>
          <FontAwesomeIcon icon="sync-alt" />
        </button>
      </span>
    );

  return (
    <div id="overview-container">
      <div className="upper-section-ovw">
        <div className="portfolio-info-section">
          <p>Portfolio Value</p>
          <p id="portfolio-value">{getPortfolioValue()}</p>
          {getUpdateSection()}
        </div>
      </div>
      <div className="lower-section-ovw">
        <div className="portfolio-details">
          <p>{getTotalStocks()}</p>
          <p>{getAvailableCash()}</p>
        </div>
        <button className="buy-btn" type="button" onClick={() => setModalIsOpen(true)}>
          Buy Stocks!
        </button>
      </div>
    </div>
  );
};

export default Overview;
