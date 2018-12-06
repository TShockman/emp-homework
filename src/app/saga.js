import {all, fork} from 'redux-saga/effects';
import authSaga from './modules/auth/saga';
import userSaga from './modules/user/saga';
import orderSaga from './modules/order/saga';

export default function * rootSaga() {
  yield all([
      fork(authSaga),
      fork(userSaga),
      fork(orderSaga)
  ]);
}
