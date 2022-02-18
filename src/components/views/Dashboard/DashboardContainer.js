import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { getAll } from './../../../redux/dashboardRedux';

const mapStateToProps = state => ({
  tasks: getAll(state),
});

export default connect(mapStateToProps)(Dashboard);
