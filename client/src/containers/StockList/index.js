import { connect } from 'react-redux';
import StockList from '../../components/Home/Portfolio/StockList';

const mapStateToProps = store => ({
  portfolio: store.user.portfolio,
  currentPrices: store.stocks.currentPrices,
  openingPrices: store.stocks.openingPrices.prices,
});

const StockListContainer = connect(mapStateToProps)(StockList);

export default StockListContainer;
