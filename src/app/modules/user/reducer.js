import {Record} from 'immutable';
import {USER_FULFILLED, USER_ORDERS_FULFILLED} from './actions';

const UserState = Record({
  user: null,
  orders: null
});

const initialState = new UserState();

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_FULFILLED:
      return state.set('user', action.user);
    case USER_ORDERS_FULFILLED:
      return state.set('orders', action.orders);
    default: {
      return state;
    }
  }
}