import React from 'react';
import { useHistory } from 'react-router-dom';
import { logOut } from '../../../api/auth';

const NavBar = ({ setShowPortfolio }) => {
  const history = useHistory();
  const handleLogOut = () => {
    history.push('/login');
    logOut();
  };
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
