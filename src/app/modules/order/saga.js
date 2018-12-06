import {all, fork, select, call, put, takeEvery, getContext} from 'redux-saga/effects';
import {GET_ORDERS_REQUESTED, GET_ORDERS_FULFILLED} from './actions';

import EmpaticaService from '../../services/EmpaticaService';

export const empaticaService = EmpaticaService.instance;

// attempt to retrieve user orders
export function * retrieveUserOrders({userId}) {
  const ordersResult = yield call(empaticaService.getUserOrders, userId);

  if (!ordersResult) {
    console.log("Error getting orders.");
    yield call(alert, "Orders Get Failure.");
    // TODO
    return;
  }

  yield put({type: GET_ORDERS_FULFILLED, orders: ordersResult.orders, userId});
}


export default function * rootSaga () {
  yield all([
    fork(takeEvery, GET_ORDERS_REQUESTED, retrieveUserOrders)
  ]);
}
