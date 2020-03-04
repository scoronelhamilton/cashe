import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = store => ({
  isLoggedIn: store.user.isLoggedIn,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
