import {connect} from 'react-redux';
import Table from './component';

function mapStateToProps(state, ownProps) {
  return {
    width: state.get('width'),
    height: state.get('height'),
    data: state.get('data')
  };
}

export default connect(mapStateToProps)(Table);
