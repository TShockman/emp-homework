import {all, fork, select, call, put, takeLatest, getContext} from 'redux-saga/effects';
import {LOGIN_FULFILLED, LOGIN_REQUESTED} from './actions';
import EmpaticaService from '../../services/EmpaticaService';

const empaticaService = EmpaticaService.instance;

// attempt to login
function * loginUser({username, password}) {
  const user = {username, password};
  console.log('here')
  console.log(user)
  const result = yield call(empaticaService.login, user);

  if (result) {
    yield put({type: LOGIN_FULFILLED, id: result.id, username});
    yield call(alert, "Success!");
  } else {
    console.log("Error logging in.")
    yield call(alert, "Failure.");
    // TODO: handle error logging in
  }
}

export default function * rootSaga () {
  yield all([
    fork(takeLatest, LOGIN_REQUESTED, loginUser)
  ]);
}