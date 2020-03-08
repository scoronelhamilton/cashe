import React from 'react';
import { useInput } from '../../hooks/input-hooks';
import { logIn } from '../../auth/index';

const LogIn = ({ setShowLogin, handleSuccessAuth }) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

  const handleSubmit = e => {
    e.preventDefault();

    logIn(email, password)
      .then(({ data }) => {
        handleSuccessAuth(data.token);
      })
      .catch(e => resetPassword());
  };

  return (
    <div id="login-container">
      <form id="login-form" onSubmit={e => handleSubmit(e)}>
        <input placeholder="Email" autoComplete="username" {...bindEmail} />
        <input
          placeholder="Password"
          type="password"
          autoComplete="current-password"
          {...bindPassword}
        />
      </form>
      <button form="login-form">Log in</button>
      <button onClick={() => setShowLogin(false)}>Sign up</button>
    </div>
  );
};

export default LogIn;
