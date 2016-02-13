import { fakeRequest } from './utils'

export const SELECT = 'SELECT';
export const REQUEST_BEGIN = 'REQUEST_BEGIN';
export const REQUEST_END = 'REQUEST_END';

export const change = value =>
  dispatch => {
    dispatch(requestBegin());
    fakeRequest(value, items => dispatch(requestEnd(items)));
  };

export const select = item => ({ type: SELECT, payload: item });
export const requestBegin = () => ({ type: REQUEST_BEGIN });
export const requestEnd = items => ({ type: REQUEST_END, payload: items });
