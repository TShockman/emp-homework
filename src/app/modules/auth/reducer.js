import {Record} from 'immutable';
import {LOGIN_FULFILLED} from './actions';

// auth state is an immutable record holding only a user id
export const AuthState = Record({
  id: null
});

const initialState = new AuthState();

// on user login, update the state to hold the confirmed id
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FULFILLED:
      return state.set('id', action.id);
    default: {
      return state;
    }
  }
}