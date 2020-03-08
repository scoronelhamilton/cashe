import { connect } from 'react-redux';
import TradeForm from '../../components/Home/TradeModal/TradeForm';
import addStock from '../../actions/creators/addStock';

const mapStateToProps = store => ({
  symbols: store.stocks.symbols,
  cash: store.user.userInfo.cash,
});

const mapDispatchToProps = dispatch => ({
  addStock: data => dispatch(addStock(data)),
});

const TradeFormContainer = connect(mapStateToProps, mapDispatchToProps)(TradeForm);

export default TradeFormContainer;
