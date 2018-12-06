import {loginUser, empaticaService} from '../saga';
import {call, put} from 'redux-saga/effects';
import {LOGIN_FULFILLED} from '../actions';
import {push} from 'redux-little-router';

describe('Auth Saga', () => {
  it('Handles successful login flow', () => {
    const gen = loginUser({username: 'jondo', password: '12345'});
    expect(gen.next().value).toEqual(call(empaticaService.login, {username: 'jondo', password: '12345'}));
    expect(gen.next({id: 777}).value).toEqual(put({type: LOGIN_FULFILLED, id: 777}));
    expect(gen.next().value).toEqual(put(push(`/user/777`)));
    expect(gen.next().done).toBe(true);
  });
});
