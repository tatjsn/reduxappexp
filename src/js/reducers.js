import { combineReducers } from 'redux';

const message = (state = "Initial", action) => state;

export default combineReducers({
  message
});
