import { connect } from 'react-redux';
import LoginPage from '../../components/LoginPage/index';
import setLoggedIn from '../../actions/creators/setLoggedIn';

const mapDispatchToProps = dispatch => ({
  setLoggedIn: isLoggedIn => dispatch(setLoggedIn(isLoggedIn)),
});

const LoginPageContainer = connect(null, mapDispatchToProps)(LoginPage);

export default LoginPageContainer;
