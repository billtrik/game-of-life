import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {nextStep} from '../../actions';
import NextStepButton from './component';

function mapStateToProps(state, ownProps) {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onNextStep: nextStep
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NextStepButton);
