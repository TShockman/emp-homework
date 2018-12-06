import {all, fork, select, call, put, takeEvery, getContext} from 'redux-saga/effects';
import {USER_FULFILLED, USER_ORDERS_FULFILLED, USER_ORDERS_REQUESTED, USER_REQUESTED} from './actions';
import {push} from 'redux-little-router';

import EmpaticaService from '../../services/EmpaticaService';

const empaticaService = EmpaticaService.instance;

// attempt to retrieve user
function * retrieveUser({id}) {
  const userResult = yield call(empaticaService.getUser, id);

  if (!userResult) {
    console.log("Error getting user.");
    yield call(alert, "User Get Failure.");
    // TODO
    return;
  }

  yield put({type: USER_FULFILLED, user: userResult});
}

// attempt to retrieve user orders
function * retrieveUserOrders({id}) {
  const ordersResult = yield call(empaticaService.getUserOrders, id);

  if (!ordersResult) {
    console.log("Error getting orders.");
    yield call(alert, "Orders Get Failure.");
    // TODO
    return;
  }

  yield put({type: USER_ORDERS_FULFILLED, orders: ordersResult.orders});
}

export default function * rootSaga () {
  yield all([
      fork(takeEvery, USER_REQUESTED, retrieveUser),
      fork(takeEvery, USER_ORDERS_REQUESTED, retrieveUserOrders)
  ]);
}
