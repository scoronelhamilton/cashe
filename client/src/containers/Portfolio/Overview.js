import { connect } from 'react-redux';
import Overview from '../../components/Home/Portfolio/Overview';

const mapStateToProps = store => ({
  user: store.user.userInfo,
  portfolio: store.user.portfolio,
});

const OverviewContainer = connect(mapStateToProps)(Overview);

export default OverviewContainer;
