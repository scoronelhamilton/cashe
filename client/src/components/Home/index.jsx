import React, { useEffect, useState } from 'react';
import NavBar from './NavBar/index';
import Portfolio from './Portfolio/index';
import Transactions from './Transactions/index';
import { getUserInfo } from '../../api/helpers';

const Home = () => {
  const [showPortfolio, setShowPortfolio] = useState(true);

  useEffect(() => {
    getUserInfo()
      .then(({ data }) => console.log(data))
      .catch(e => console.error(e.message));
  }, []);

  return (
    <>
      <NavBar setShowPortfolio={setShowPortfolio} />
      {showPortfolio ? <Portfolio /> : <Transactions />}
    </>
  );
};

export default Home;
