import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
// temporary: doesn't belong here
import { connect } from 'react-redux';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() from actions
)(createStore);
const store = createStoreWithMiddleware(reducers);

// temporary: doesn't belong here
const Message = connect(state => ({ message: state.message }))(
  ({ message }) => <h1>{message}</h1>
);

render((
  <Provider store={store}>
    <Message />
  </Provider>
), document.getElementById('app'))
