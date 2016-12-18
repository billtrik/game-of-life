import Immutable from 'immutable';
import {NEXT_STEP} from './actions';

function calculateNextState(data) {
  return data;
}

export default (state = Immutable.fromJS({}), action) => {
  switch(action.type) {
    case NEXT_STEP:
      return state.set('data', calculateNextState(state.get('data')));
    default:
      return state;
  }
};
