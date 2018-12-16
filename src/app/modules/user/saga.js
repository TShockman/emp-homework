import {all, fork, call, put, takeEvery} from 'redux-saga/effects';
import {USER_FULFILLED, USER_REQUESTED} from './actions';

import EmpaticaService from '../../services/EmpaticaService';

export const empaticaService = EmpaticaService.instance;

// attempt to retrieve user
export function * retrieveUser({id}) {
  const userResult = yield call(empaticaService.getUser, id);

  // Please see auth saga for discussion of proper saga error handling.
  if (!userResult) {
    yield call(alert, "User Get Failure.");
    return;
  }

  // if successfully retrieved user, dispatch an action with the result
  yield put({type: USER_FULFILLED, user: userResult});
}


export default function * rootSaga () {
  yield all([
      fork(takeEvery, USER_REQUESTED, retrieveUser)
  ]);
}
