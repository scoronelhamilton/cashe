import React from 'react';
import { useHistory } from 'react-router-dom';
import { useInput } from '../../hooks/input-hooks';
import { logIn, saveToken } from '../../auth/index';

const LogIn = ({ setShowLogin, setRedirect }) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: password, bind: bindPassword, reset: resetPassword } = useInput('');

  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    logIn(email, password)
      .then(({ data }) => {
        saveToken(data.token);
        setRedirect(false);
        history.push('/');
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
