import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import Layout from './layout/component';

export default React.createClass({
  componentWillMount() {
    this.store = createStore({
      middleware: []
    });
  },

  render() {
    return (
      <Provider store={this.store}>
        <Layout />
      </Provider>
    );
  }
});
