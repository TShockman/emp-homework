import {Record} from 'immutable';
import {LOGIN_FULFILLED} from './actions';

const AuthState = Record({
  id: null,
  username: null
});

const initialState = new AuthState();

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return state.merge({
        username: action.username,
        id: action.id
      });
    default: {
      return state;
    }
  }
}