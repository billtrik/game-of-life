import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { handleAutoplayToggling } from '../../actions';
import Component from './component';

function mapStateToProps(state, ownProps) {
  return {
    autoplay: state.get('autoplay')
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onToggleAutoplay: handleAutoplayToggling
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
