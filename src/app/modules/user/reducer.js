import {Record} from 'immutable';
import {USER_FULFILLED, USER_ORDERS_FULFILLED} from './actions';

const UserState = Record({
  user: null
});

const initialState = new UserState();

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FULFILLED:
      return state.set('user', action.user);
    default: {
      return state;
    }
  }
}