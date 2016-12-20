import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import getInitialState from './initial-state';
import thunkMiddleware from 'redux-thunk';

export default ({
  initialState = getInitialState(),
  middleware = []
} = {}) => {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware.apply(null, [thunkMiddleware, ...middleware])
    )
  );
};
