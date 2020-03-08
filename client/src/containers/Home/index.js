import { connect } from 'react-redux';
import Home from '../../components/Home/index';
import setUserInfo from '../../actions/creators/setUserInfo';
import setSymbolsList from '../../actions/creators/setSymbolsList';

const mapStateToProps = store => ({
  portfolio: store.user.portfolio,
});

const mapDispatchToProps = dispatch => ({
  setSymbolsList: symbols => dispatch(setSymbolsList(symbols)),
  setUserInfo: info => dispatch(setUserInfo(info)),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
