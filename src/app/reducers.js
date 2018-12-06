import {NAME as AUTH_NAME} from './modules/auth/actions';
import authReducer from './modules/auth/reducer';

export default {
  [AUTH_NAME]: authReducer
};
