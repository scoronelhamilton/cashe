import { connect } from 'react-redux';
import App from '../components/App';
import setLoggedIn from '../actions/creators/setLoggedIn';

const mapStateToProps = store => ({
  isLoggedIn: store.user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn: isLoggedIn => dispatch(setLoggedIn(isLoggedIn)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
