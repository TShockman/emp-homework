/* eslint-disable import/first */
jest.mock('../Login', () => 'Login');

import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import authReducer, {AuthState} from '../../reducer';
import {NAME} from '../../actions';
import LoginContainer from '../index';

describe('LoginContainer', () => {
  it('Provides Login with correct props', () => {
    const store = createStore(authReducer, {
      [NAME]: new AuthState({id: 123})
    });
    const tree = renderer.create(
        <Provider store={store}>
          <LoginContainer/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
