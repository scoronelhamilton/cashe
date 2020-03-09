import React, { useState } from 'react';
import ErrorMessage from '../Errors/index';
import { useInput } from '../../hooks/input-hooks';
import { registerUser } from '../../auth/index';

const SignUp = ({ setShowLogin, handleSuccessAuth }) => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');
  const {
    value: confPassword,
    bind: bindConfPassword,
    reset: resetConfPassword,
  } = useInput('');
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confPassword) {
      setError('Passwords must be equal');
      setHasError(true);
      resetPassword();
      resetConfPassword();
      return;
    }
    const userInfo = { name, lastName, email, password };
    registerUser(userInfo)
      .then(res => {
        handleSuccessAuth(res.token);
      })
      .catch(err => console.error(err.message));
  };

  const renderErrorMessage = () => <ErrorMessage hasError={hasError} message={error} />;

  return (
    <div id="sign-up-container">
      <h2>
        Welcome to C A S H <span>È</span>
      </h2>
      <form id="sign-up-form" onSubmit={e => handleSubmit(e)}>
        <input type="text" placeholder="Name" {...bindName} />
        <input type="text" placeholder="Last Name" {...bindLastName} />
        <input type="text" placeholder="Email" {...bindEmail} />
        <input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          {...bindPassword}
        />
        <input placeholder="Confirm Password" type="password" {...bindConfPassword} />
      </form>
      <button className="login-page-button" form="sign-up-form">
        Sign Up
      </button>
      <button id="redirect-to-login" onClick={() => setShowLogin(true)}>
        Log In
      </button>
      {renderErrorMessage()}
    </div>
  );
};

export default SignUp;
