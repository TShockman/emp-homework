import {all, fork, select, call, put, takeLatest, getContext} from 'redux-saga/effects';
import {LOGIN_FULFILLED, LOGIN_REQUESTED} from './actions';
import {push} from 'redux-little-router';

import EmpaticaService from '../../services/EmpaticaService';

const empaticaService = EmpaticaService.instance;

// attempt to login
function * loginUser({username, password}) {
  const loginResult = yield call(empaticaService.login, {username, password});

  if (!loginResult) {
    console.log("Error logging in.");
    yield call(alert, "Login Failure.");
    // TODO: handle error logging in
    return;
  }

  const {id} = loginResult;

  yield put({type: LOGIN_FULFILLED, id});

  return yield put(push(`/user/${id}`));
}

export default function * rootSaga () {
  yield all([
    fork(takeLatest, LOGIN_REQUESTED, loginUser)
  ]);
}