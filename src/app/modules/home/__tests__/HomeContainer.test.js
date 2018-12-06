/* eslint-disable import/first */
jest.mock('../Home', () => 'Home');

import React from 'react';
import renderer from 'react-test-renderer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import HomeContainer from '../index';

describe('HomeContainer', () => {
  it('Provides Home with correct props', () => {
    const store = createStore(x => x, {});
    const tree = renderer.create(
        <Provider store={store}>
          <HomeContainer/>
        </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});