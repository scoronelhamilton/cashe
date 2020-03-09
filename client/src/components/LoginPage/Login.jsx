import React, { useState } from 'react';
import ErrorMessage from '../Errors/index';
import { useInput } from '../../hooks/input-hooks';
import { logIn } from '../../auth/index';

const LogIn = ({ setShowLogin, handleSuccessAuth }) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState('');

  const renderErrorMessage = () => <ErrorMessage hasError={hasError} message={error} />;

  const handleSubmit = e => {
    e.preventDefault();

    logIn(email, password)
      .then(({ data }) => {
        handleSuccessAuth(data.token);
      })
      .catch(e => {
        setHasError(true);
        setError('Incorrect user or password.');
        resetPassword();
      });
  };

  return (
    <div id="login-container">
      <h2>
        C A S H <span>È</span>
      </h2>
      <form id="login-form" onSubmit={e => handleSubmit(e)}>
        <input placeholder="Email" autoComplete="false" {...bindEmail} />
        <input placeholder="Password" type="password" autoComplete="" {...bindPassword} />
      </form>
      <div className="login-buttons-section">
        <button className="login-page-button" form="login-form">
          Log in
        </button>
        <span>or</span>
        <button className="login-page-button" onClick={() => setShowLogin(false)}>
          Sign up
        </button>
      </div>
      {renderErrorMessage()}
    </div>
  );
};

export default LogIn;
