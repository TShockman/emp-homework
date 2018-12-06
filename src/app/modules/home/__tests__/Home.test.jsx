import React from 'react';
import Home from '../Home';
import ReactTestRenderer from 'react-test-renderer/shallow';

const renderer = new ReactTestRenderer();

describe('Home', () => {
  it('Renders consistently', () => {
    expect(renderer.render(<Home/>)).toMatchSnapshot();
  });
});