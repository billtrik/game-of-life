import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';

export default React.createClass({
  componentWillMount() {
    this.store = createStore({
      middleware: []
    });
  },

  render() {
    return (
      <Provider store={this.store}>
        <p>This is a dummy content with store</p>
      </Provider>
    );
  }
});
