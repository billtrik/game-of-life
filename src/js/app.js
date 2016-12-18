import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store';
import Table from './table/container';

export default React.createClass({
  componentWillMount() {
    this.store = createStore({
      middleware: []
    });
  },

  render() {
    return (
      <Provider store={this.store}>
        <Table />
      </Provider>
    );
  }
});
