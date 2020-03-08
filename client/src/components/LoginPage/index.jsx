import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveToken, setHeaders } from '../../auth/index';
import LogIn from './LogIn.jsx';
import SignUp from './SignUp.jsx';

const LoginPage = ({ setRedirect }) => {
  const [showLogin, setShowLogin] = useState(true);

  const history = useHistory();
  const handleSuccessAuth = token => {
    saveToken(token);
    setHeaders();
    setRedirect(false);
    history.push('/');
  };

  return (
    <>
      {showLogin ? (
        <LogIn setShowLogin={setShowLogin} handleSuccessAuth={handleSuccessAuth} />
      ) : (
        <SignUp setShowLogin={setShowLogin} handleSuccessAuth={handleSuccessAuth} />
      )}
    </>
  );
};

export default LoginPage;
