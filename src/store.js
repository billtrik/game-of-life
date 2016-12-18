import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import getInitialState from './initial-state';

export default ({
  initialState = getInitialState(),
  middleware = []
} = {}) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware.apply(null, [...middleware])
    )
  );
};
