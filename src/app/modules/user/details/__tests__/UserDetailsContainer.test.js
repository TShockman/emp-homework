/* eslint-disable import/first */
jest.mock('../UserDetails', () => 'UserDetails');

import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AuthState} from '../../../auth/reducer';
import {NAME as AUTH_NAME} from '../../../auth/actions';
import userReducer, {UserState} from '../../reducer';
import {NAME} from '../../actions';

import UserDetailsContainer from '../index';

describe('UserDetailsContainer', () => {
  it('Consistently provides UserDetails with correct props', () => {
    const store = createStore(userReducer, {
      [AUTH_NAME]: new AuthState({id: 123}),
      [NAME]: new UserState({
        user: 'mock user state user'
      })
    });
    const tree = renderer.create(
        <Provider store={store}>
          <UserDetailsContainer/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
