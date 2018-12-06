import {selectAuthState} from '../selectors';
import {AuthState} from '../reducer';
import {NAME} from '../actions';

test('domain state selector', () => {
  const authState = new AuthState({id: 123});
  const state = {
    [NAME]: authState
  };
  expect(selectAuthState(state)).toBe(authState);
});
