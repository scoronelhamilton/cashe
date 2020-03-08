import React from 'react';

const NavBar = ({ setShowPortfolio }) => {
  return (
    <div id="navbar">
      <a onClick={() => setShowPortfolio(true)}>Portfolio</a>
      <a onClick={() => setShowPortfolio(false)}>Transactions</a>
    </div>
  );
};

export default NavBar;
