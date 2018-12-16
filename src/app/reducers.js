import {NAME as AUTH_NAME} from './modules/auth/actions';
import authReducer from './modules/auth/reducer';

import {NAME as USER_NAME} from './modules/user/actions';
import userReducer from './modules/user/reducer';

import {NAME as ORDER_NAME} from './modules/order/actions';
import orderReducer from './modules/order/reducer';

// map from reducer namespace to reducer, to be used in
// combineReducers with redux-little-router's reducer
export default {
  [AUTH_NAME]: authReducer,
  [USER_NAME]: userReducer,
  [ORDER_NAME]: orderReducer
};
