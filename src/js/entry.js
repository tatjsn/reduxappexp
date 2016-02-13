import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import Autocomplete from 'react-autocomplete'
import reducers from './reducers';
import { select, change } from './actions';
// temporary: doesn't belong here
import { connect } from 'react-redux';
import { styles } from './utils'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // lets us dispatch() from actions
)(createStore);
const store = createStoreWithMiddleware(reducers);

// temporary: doesn't belong here
const Message = connect(
  state => ({ message: state.message })
)(({ message }) => <h1>{message}</h1>);

const TextInput = connect(
  state => ({ items: state.unitedStates }),
  state => ({ loading: state.loading })
)(Autocomplete);

render((
  <Provider store={store}>
    <div>
      <Message />
      <TextInput
        getItemValue={item => item.name}
        onSelect={(value, item) => {
            store.dispatch(select(item));
          }}
        onChange={(event, value) => {
            store.dispatch(change(value));
          }}
        renderItem={(item, isHighlighted) => (
            <div
              style={isHighlighted ? styles.highlightedItem : styles.item}
              key={item.abbr}
              id={item.abbr}
                 >{item.name}</div>
          )}
      />
    </div>
  </Provider>
), document.getElementById('app'))
