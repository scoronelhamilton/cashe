import { connect } from 'react-redux';
import Home from '../../components/Home/index';
import setUserInfo from '../../actions/creators/setUserInfo';
import setSymbolsList from '../../actions/creators/setSymbolsList';
import setOpeningPrices from '../../actions/creators/setOpeningPrices';
import setCurrentPrices from '../../actions/creators/setCurrentPrices';

const mapDispatchToProps = dispatch => ({
  setSymbolsList: symbols => dispatch(setSymbolsList(symbols)),
  setUserInfo: info => dispatch(setUserInfo(info)),
  setOpeningPrices: prices => dispatch(setOpeningPrices(prices)),
  setCurrentPrices: prices => dispatch(setCurrentPrices(prices)),
});

const HomeContainer = connect(null, mapDispatchToProps)(Home);

export default HomeContainer;
