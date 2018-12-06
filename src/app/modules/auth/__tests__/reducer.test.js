import authReducer, {AuthState} from '../reducer';
import {LOGIN_FULFILLED} from '../actions';

describe('AuthReducer', () => {
  it('Updates the id of the logged-in user.', () => {
    let state = authReducer(undefined, {});
    expect(state.id).toBeNull();
    state = authReducer(state, {type: LOGIN_FULFILLED, id: 123});
    expect(state.id).toBe(123);
  });
});