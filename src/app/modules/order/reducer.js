import {Map} from 'immutable';
import {GET_ORDERS_FULFILLED} from './actions';

// Order state is a map from user id to list of order,
// cannot be a record like other domain states since
// the ids cannot be known in advance. Still immutable.
const initialState = new Map();

// Put orders into the state when they are successfully retrieved.
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_FULFILLED:
      return state.merge({[action.userId]: action.orders});
    default: {
      return state;
    }
  }
}