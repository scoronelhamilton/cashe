import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../components/LoginPage/index';
import HomeContainer from '../containers/Home';
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
    return <HomeContainer to="/home" />;
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage setRedirect={setRedirect} />
        </Route>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" render={renderRoutes}></Route>
      </Switch>
    </Router>
  );
};

export default App;
