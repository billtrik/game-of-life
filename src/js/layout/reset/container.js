import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {reset} from '../../actions';
import ResetComponent from './component';

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onReset: reset
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetComponent);
