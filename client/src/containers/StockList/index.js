import { connect } from 'react-redux';
import StockList from '../../components/Home/Portfolio/StockList';

const mapStateToProps = store => ({
  portfolio: store.user.userInfo.portfolio,
  currentPrices: store.stocks.currentPrices,
});

const StockListContainer = connect(mapStateToProps)(StockList);

export default StockListContainer;
