import React from 'react';

const NavBar = ({ setShowPortfolio }) => {
  return (
    <div>
      THIS IS NAV BAR
      <a onClick={() => setShowPortfolio(true)}>Portfolio</a>
      <a onClick={() => setShowPortfolio(false)}>Transactions</a>
    </div>
  );
};

export default NavBar;
