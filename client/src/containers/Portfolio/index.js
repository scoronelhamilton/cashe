import { connect } from 'react-redux';
import Portfolio from '../../components/Home/Portfolio/index';
import setCurrentPrices from '../../actions/creators/setCurrentPrices';

const mapStateToProps = store => ({
  portfolio: store.user.userInfo.portfolio,
});

const mapDispatchToProps = dispatch => ({
  setCurrentPrices: prices => dispatch(setCurrentPrices(prices)),
});

const PortfolioContainer = connect(mapStateToProps, mapDispatchToProps)(Portfolio);

export default PortfolioContainer;
