import {selectUserOrders} from '../selectors';
import {fromJS} from 'immutable';
import {NAME} from '../actions';

test('domain state selector', () => {
  const ordersState = fromJS({
    777: {
      id: 555,
      ref: "ref123",
      status: "OK",
    },
    333: {
      id: 999,
      ref: "ref987",
      status: "NOT_OK"
    }
  });
  const state = {
    [NAME]: ordersState
  };
  expect(selectUserOrders(state, 777)).toBe(ordersState.get('777'));
  expect(selectUserOrders(state, 123)).toBeUndefined();
});
