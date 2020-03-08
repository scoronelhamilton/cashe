import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/index';
import TradeModal from './TradeModal/index';
import PortfolioContainer from '../../containers/Portfolio';
import Transactions from './Transactions/index';
import {
  getUserInfo,
  getAllSymbols,
  getOpeningPrices,
  getCurrentPrices,
} from '../../api/helpers';

const Home = ({ setUserInfo, setSymbolsList, setOpeningPrices, setCurrentPrices }) => {
  const [showPortfolio, setShowPortfolio] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [{ data: user }, { data: symbols }] = await Promise.all([
          getUserInfo(),
          getAllSymbols(),
        ]);
        setUserInfo(user);
        setSymbolsList(symbols);

        const portfolio = Object.keys(user.portfolio);
        const { data: currentPrices } = await getCurrentPrices(portfolio);
        setCurrentPrices(currentPrices);

        const { data: openingPrices } = await getOpeningPrices(portfolio);
        setOpeningPrices(openingPrices);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, []);

  const getPage = () =>
    showPortfolio ? (
      <PortfolioContainer setModalIsOpen={setModalIsOpen} />
    ) : (
      <Transactions />
    );

  return (
    <div id="app-container">
      <NavBar setShowPortfolio={setShowPortfolio} />
      <div id="main-container">{getPage()}</div>
      <TradeModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
};

export default Home;
