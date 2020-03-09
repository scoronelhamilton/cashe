import { connect } from 'react-redux';
import TradeForm from '../../components/Home/TradeModal/TradeForm';
import addStock from '../../actions/creators/addStock';
import setOpeningPrices from '../../actions/creators/setOpeningPrices';
import setCurrentPrices from '../../actions/creators/setCurrentPrices';

const mapStateToProps = store => ({
  symbols: store.stocks.symbols,
  cash: store.user.userInfo.cash,
  portfolio: store.user.portfolio,
});

const mapDispatchToProps = dispatch => ({
  addStock: data => dispatch(addStock(data)),
  setOpeningPrices: prices => dispatch(setOpeningPrices(prices)),
  setCurrentPrices: prices => dispatch(setCurrentPrices(prices)),
});

const TradeFormContainer = connect(mapStateToProps, mapDispatchToProps)(TradeForm);

export default TradeFormContainer;
