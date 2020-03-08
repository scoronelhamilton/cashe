import { connect } from 'react-redux';
import Overview from '../../components/Home/Portfolio/Overview';

const mapStateToProps = store => ({
  user: store.user.userInfo,
});

const OverviewContainer = connect(mapStateToProps)(Overview);

export default OverviewContainer;
