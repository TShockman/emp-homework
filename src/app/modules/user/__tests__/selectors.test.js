import {selectUserState} from '../selectors';
import {UserState} from '../reducer';
import {NAME} from '../actions';

test('domain state selector', () => {
  const userState = new UserState({user: 'mock mock mock'});
  const state = {
    [NAME]: userState
  };
  expect(selectUserState(state)).toBe(userState);
});
