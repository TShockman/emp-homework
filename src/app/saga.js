import {all, fork} from 'redux-saga/effects';
import authSaga from './modules/auth/saga';
import userSaga from './modules/user/saga';

export default function * rootSaga() {
  yield all([
      fork(authSaga),
      fork(userSaga)
  ]);
}
