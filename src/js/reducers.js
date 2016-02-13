import { combineReducers } from 'redux';
import { SELECT, REQUEST_BEGIN, REQUEST_END } from './actions';
import { getStates } from './utils';

const message = (state = "Initial", action) => state;

const unitedStates = (state = getStates(), { type, payload }) => {
  switch (type) {
    case SELECT:
      return [ payload ];
    case REQUEST_END:
      return payload;
    default:
      return state;
  }
}

const loading = (state = false, { type, payload }) => {
  switch (type) {
    case REQUEST_BEGIN:
      return true;
    case REQUEST_END:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  message,
  unitedStates,
  loading
});
