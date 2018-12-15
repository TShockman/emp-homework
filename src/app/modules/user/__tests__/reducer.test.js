import userReducer, {UserState} from '../reducer';
import {USER_FULFILLED} from '../actions';

describe('OrdersReducer', () => {
  it('Updates user.', () => {
    // test initial state
    let state = userReducer(undefined, {});
    expect(state).toEqual(new UserState());

    // reducer puts in orders from action
    const mockAction = {
      type: USER_FULFILLED,
      user: {my: 'mock', user: 'information'}
    };
    state = userReducer(state, mockAction);
    expect(state).toEqual(new UserState({user: {my: 'mock', user: 'information'}}));
  });
});