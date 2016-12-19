import _ from 'lodash';
import { fromJS } from 'immutable';
import { NEXT_STEP } from './actions';

function getRowCount(list, row, col, width) {
  const slice = list.slice(Math.max(0, col - 1), Math.min(width, col + 2));

  return _.compact(slice.toJS()).length
}

function shouldLive(data, row, col, width, height) {
  let total = 0;

  // Get count for previous line
  if (row !== 0) {
    total = total + getRowCount(data.get(row - 1), row, col, width);
  }

  // Get count for current line
  total = total + getRowCount(data.get(row), row, col, width);

  // Get count for next line
  if (row !== height - 1) {
    total = total + getRowCount(data.get(row + 1), row, col, width);
  }

  return total === 2 || total === 3;
}

function calculateNextState(data, width, height) {
  const result = [];

  for (let i=0; i < width; i++) {
    result[i] = [];

    for (let j=0; j < width; j++) {
      result[i][j] = shouldLive(data, i, j, width, height);
    }
  }

  return fromJS(result);
}

export default (state = fromJS({}), action) => {
  switch(action.type) {
    case NEXT_STEP:
      return state.set('data', calculateNextState(state.get('data'), state.get('width'), state.get('height')));
    default:
      return state;
  }
};
