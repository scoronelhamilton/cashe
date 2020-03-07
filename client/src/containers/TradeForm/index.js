import { connect } from 'react-redux';
import TradeForm from '../../components/Home/Portfolio/TradeForm';

const mapStateToProps = store => ({
  symbols: store.stocks.symbols,
  cash: store.user.userInfo.cash,
});

const TradeFormContainer = connect(mapStateToProps)(TradeForm);

export default TradeFormContainer;
