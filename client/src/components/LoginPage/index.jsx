import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveToken, setHeaders } from '../../auth/index';
import LogIn from './Login.jsx';
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

  const renderForm = () =>
    showLogin ? (
      <LogIn setShowLogin={setShowLogin} handleSuccessAuth={handleSuccessAuth} />
    ) : (
      <SignUp setShowLogin={setShowLogin} handleSuccessAuth={handleSuccessAuth} />
    );

  return <div id="login-page-wrapper">{renderForm()}</div>;
};

export default LoginPage;
