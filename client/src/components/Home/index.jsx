import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar/index';
import TradeModal from './TradeModal/index';
import PortfolioContainer from '../../containers/Portfolio';
import Transactions from './Transactions/index';
import { getUserInfo, getAllSymbols, getOpeningPrices } from '../../api/helpers';

const Home = ({ setUserInfo, setSymbolsList, portfolio }) => {
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => setUserInfo(data))
      .catch(err => console.error(err));

    getAllSymbols()
      .then(({ data }) => setSymbolsList(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    getOpeningPrices('AAPL,FB')
      .then(data => console.log(data))
      .catch(e => console.error(e.message));
  }, [portfolio]);

  return (
    <div id="app-container">
      <NavBar setShowPortfolio={setShowPortfolio} />
      <div id="main-container">
        {showPortfolio ? (
          <PortfolioContainer setModalIsOpen={setModalIsOpen} />
        ) : (
          <Transactions />
        )}
      </div>
      <TradeModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default Home;
