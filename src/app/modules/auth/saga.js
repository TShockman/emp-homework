import {all, fork, call, put, takeLatest} from 'redux-saga/effects';
import {LOGIN_FULFILLED, LOGIN_REQUESTED} from './actions';
import {push} from 'redux-little-router';

import EmpaticaService from '../../services/EmpaticaService';

export const empaticaService = EmpaticaService.instance;

// Saga to attempt to login
export function * loginUser({username, password}) {
  const loginResult = yield call(empaticaService.login, {username, password});

  // If we failed to log in, simply send an alert message.
  // See actions.js for a discussion of a more proper error flow.
  // In this case we would dispatch a failure action and display
  // a more proper alert in a different location, possibly in another
  // saga whose purpose is to handle alerts of various types (success,
  // error, warning, etc.)
  if (!loginResult) {
    yield call(alert, "Login Failure.");
    return;
  }

  // if login success, dispatch a login fulfilled event and
  // redirect the user to their user details page
  const {id} = loginResult;
  yield put({type: LOGIN_FULFILLED, id});
  return yield put(push(`/user/${id}`));
}

export default function * rootSaga () {
  yield all([
    fork(takeLatest, LOGIN_REQUESTED, loginUser)
  ]);
}