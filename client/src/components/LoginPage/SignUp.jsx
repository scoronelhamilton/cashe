import React from 'react';
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

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== confPassword) {
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
    </div>
  );
};

export default SignUp;
