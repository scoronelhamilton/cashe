import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/index';
import PortfolioContainer from '../../containers/Portfolio';
import Transactions from './Transactions/index';
import { getUserInfo, getAllSymbols } from '../../api/helpers';

const Home = ({ setUserInfo, setSymbolsList }) => {
  const [showPortfolio, setShowPortfolio] = useState(true);

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => setUserInfo(data))
      .catch(e => console.error(e.message));
    getAllSymbols()
      .then(({ data }) => setSymbolsList(data))
      .catch(e => console.error(e.message));
  }, []);

  return (
    <>
      <NavBar setShowPortfolio={setShowPortfolio} />
      {showPortfolio ? <PortfolioContainer /> : <Transactions />}
      {/* <a href="https://iexcloud.io">Data provided by IEX Cloud</a> */}
    </>
  );
};

export default Home;
