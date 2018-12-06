import ordersReducer from '../reducer';
import {GET_ORDERS_FULFILLED} from '../actions';
import {Map} from 'immutable';

describe('OrdersReducer', () => {
  it('Updates orders of user.', () => {
    // test initial state
    let state = ordersReducer(undefined, {});
    expect(state).toEqual(Map());

    // reducer puts in orders from action
    const mockAction = {
      type: GET_ORDERS_FULFILLED,
      userId: 5,
      orders: [{bogusOrder: 'abc'}, {bogusOrder: 'def'}]
    };
    state = ordersReducer(state, mockAction);
    expect(state).toEqual(Map({'5': [{bogusOrder: 'abc'}, {bogusOrder: 'def'}]}));

    // allow adding orders for another user
    // currently no use case for this, but would be helpful feature
    // for adding admins or corporate/group accounts
    mockAction.userId = 7;
    state = ordersReducer(state, mockAction);
    let expectedState = Map({
      '5': mockAction.orders,
      '7': mockAction.orders
    });
    expect(state).toEqual(expectedState);

    // overwrites orders for user id on change
    mockAction.orders = [{bogusOrder: '123'}];
    state = ordersReducer(state, mockAction);
    expectedState = Map({
      '5': [{bogusOrder: 'abc'}, {bogusOrder: 'def'}],
      '7': mockAction.orders
    });
    expect(state).toEqual(expectedState);
  });
});