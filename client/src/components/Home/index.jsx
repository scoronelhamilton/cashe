import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar/index';
import PortfolioContainer from '../../containers/Portfolio';
import Transactions from './Transactions/index';
import { getUserInfo, getAllSymbols } from '../../api/helpers';

const Home = ({ setUserInfo, setSymbolsList }) => {
  const [showPortfolio, setShowPortfolio] = useState(true);

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => setUserInfo(data))
      .catch(err => console.error(err));

    getAllSymbols()
      .then(({ data }) => setSymbolsList(data))
      .catch(err => console.error(err));
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
