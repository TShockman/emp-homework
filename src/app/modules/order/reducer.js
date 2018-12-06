import {Map} from 'immutable';
import {GET_ORDERS_FULFILLED} from './actions';

// order state is a map from user id to list of order
const initialState = new Map();

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FULFILLED:
      return state.merge({[action.userId]: action.orders});
    default: {
      return state;
    }
  }
}