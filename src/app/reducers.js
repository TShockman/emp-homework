import {NAME as AUTH_NAME} from './modules/auth/actions';
import authReducer from './modules/auth/reducer';

import {NAME as USER_NAME} from './modules/user/actions';
import userReducer from './modules/user/reducer';

export default {
  [AUTH_NAME]: authReducer,
  [USER_NAME]: userReducer
};
