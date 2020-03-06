import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../components/LoginPage/index';
import Home from './Home/index';
import { verifyUser, setHeaders } from '../auth/index';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setHeaders();
    verifyUser()
      .then(() => setIsLoading(false))
      .catch(e => {
        setIsLoading(false);
        setRedirect(true);
      });
  }, []);

  const renderRoutes = () => {
    if (isLoading) return null;
    if (redirect) return <Redirect to="/login" />;
    return <Home to="/" />;
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage setRedirect={setRedirect} />
        </Route>
        <Route path="/" render={renderRoutes}></Route>
      </Switch>
    </Router>
  );
};

export default App;
