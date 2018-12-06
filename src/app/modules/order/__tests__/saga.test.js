import {retrieveUserOrders, empaticaService} from '../saga';
import {call, put} from 'redux-saga/effects';
import {GET_ORDERS_FULFILLED} from '../actions';

describe('Orders Saga', () => {
  it('Handles successful retrieve orders flow', () => {
    const gen = retrieveUserOrders({userId: 123});
    expect(gen.next().value).toEqual(call(empaticaService.getUserOrders, 123));
    expect(gen.next({orders: [{bogus: 'orders'}]}).value)
        .toEqual(put({
          type: GET_ORDERS_FULFILLED,
          orders: [{bogus: 'orders'}],
          userId: 123
        }));
    expect(gen.next().done).toBe(true);
  });
});
