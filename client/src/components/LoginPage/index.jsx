import React, { useState } from 'react';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

const LoginPage = ({ setRedirect }) => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      {showLogin ? (
        <LogIn setShowLogin={setShowLogin} setRedirect={setRedirect} />
      ) : (
        <SignUp setShowLogin={setShowLogin} setRedirect={setRedirect} />
      )}
    </>
  );
};

export default LoginPage;
