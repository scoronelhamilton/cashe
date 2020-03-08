import React from 'react';

const NavBar = ({ setShowPortfolio }) => {
  return (
    <div id="navbar">
      <div className="navbar-wrapper">
        <a>Home</a>
        <div>
          <a onClick={() => setShowPortfolio(true)}>Portfolio</a>
          <a onClick={() => setShowPortfolio(false)}>Transactions</a>
          <a>Log Out</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
