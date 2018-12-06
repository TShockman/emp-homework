/* eslint-disable import/first */
jest.mock('../OrderList', () => 'OrderList');

import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {AuthState} from '../../../auth/reducer';
import {NAME as AUTH_NAME} from '../../../auth/actions';
import orderReducer from '../../reducer';
import {NAME} from '../../actions';
import {Map} from 'immutable';

import OrderListContainer from '../index';

describe('OrderListContainer', () => {
  it('Consistently provides OrderList with correct props', () => {
    const store = createStore(orderReducer, {
      [AUTH_NAME]: new AuthState({id: 123}),
      [NAME]: Map({
        '7': [{bogus: 'data A'}],
        '123': [{bogus: 'mock data B'}]
      })
    });
    const tree = renderer.create(
        <Provider store={store}>
          <OrderListContainer/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
