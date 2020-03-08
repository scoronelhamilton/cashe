import { connect } from 'react-redux';
import Overview from '../../components/Home/Portfolio/Overview';

const mapStateToProps = store => ({
  user: store.user.userInfo,
  portfolio: store.user.portfolio,
  portfolioValue: store.user.portfolioValue,
  lastUpdate: store.user.lastUpdate,
});

const OverviewContainer = connect(mapStateToProps)(Overview);

export default OverviewContainer;
