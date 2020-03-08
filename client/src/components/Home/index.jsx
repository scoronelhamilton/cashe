import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar/index';
import TradeModal from './TradeModal/index';
import PortfolioContainer from '../../containers/Portfolio';
import Transactions from './Transactions/index';
import { getUserInfo, getAllSymbols, getOpeningPrices } from '../../api/helpers';
import { set } from 'mongoose';

const Home = ({ setUserInfo, setSymbolsList, setOpeningPrices }) => {
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [{ data: user }, { data: symbols }] = await Promise.all([
          getUserInfo(),
          getAllSymbols(),
        ]);

        setUserInfo(user);
        setSymbolsList(symbols);

        const portfolio = Object.keys(user.portfolio);
        const { data: openingPrices } = await getOpeningPrices(portfolio);
        setOpeningPrices(openingPrices);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, []);

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
