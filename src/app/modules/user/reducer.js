import {Record} from 'immutable';
import {USER_FULFILLED} from './actions';

// User state is an immutable record simply containing the
// user object returned by the server
export const UserState = Record({
  user: null
});

const initialState = new UserState();

// when user is retrieved, update state
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FULFILLED:
      return state.set('user', action.user);
    default: {
      return state;
    }
  }
}