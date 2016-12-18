import Immutable from 'immutable';

export default (state = Immutable.fromJS({}), action) => {
  switch(action.type) {
    default:
      return state;
  }
};
