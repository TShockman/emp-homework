import {all, fork, call, put, takeEvery} from 'redux-saga/effects';
import {GET_ORDERS_REQUESTED, GET_ORDERS_FULFILLED} from './actions';

import EmpaticaService from '../../services/EmpaticaService';

export const empaticaService = EmpaticaService.instance;

// attempt to retrieve user orders
export function * retrieveUserOrders({userId}) {
  const ordersResult = yield call(empaticaService.getUserOrders, userId);

  // Please see auth saga for discussion of how I would handle errors
  // in situations where they may actually occur.
  if (!ordersResult) {
    yield call(alert, "Orders Get Failure.");
    return;
  }

  // dispatch a fulfilled action on success
  yield put({type: GET_ORDERS_FULFILLED, orders: ordersResult.orders, userId});
}


export default function * rootSaga () {
  yield all([
    fork(takeEvery, GET_ORDERS_REQUESTED, retrieveUserOrders)
  ]);
}
