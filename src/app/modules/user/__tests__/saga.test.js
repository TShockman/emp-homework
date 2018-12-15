import {retrieveUser, empaticaService} from '../saga';
import {call, put} from 'redux-saga/effects';
import {USER_FULFILLED} from '../actions';

describe('User Saga', () => {
  it('Handles successful retrieve user flow', () => {
    const gen = retrieveUser({id: 123});
    expect(gen.next().value).toEqual(call(empaticaService.getUser, 123));
    expect(gen.next({user: 'mock user'}).value)
        .toEqual(put({
          type: USER_FULFILLED,
          user: {user: 'mock user'}
        }));
    expect(gen.next().done).toBe(true);
  });
});
