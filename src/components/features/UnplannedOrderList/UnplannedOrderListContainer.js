import { connect } from 'react-redux';
import UnplannedOrderList from './UnplannedOrderList';
import { getUnplannedTask, changeTaskParams } from '../../../redux/dashboardRedux';

const mapStateToProps = state => ({
  unplannedTasks: getUnplannedTask(state),
});

const mapDispatchToPros = dispatch => ({
  changeTaskParams: payload => dispatch(changeTaskParams(payload)),
});

export default connect(mapStateToProps, mapDispatchToPros)(UnplannedOrderList);

