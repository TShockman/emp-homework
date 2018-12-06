import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import NotFound from '../';

const renderer = new ReactShallowRenderer();

describe('NotFound', () => {
  it('Renders consistently', () => {
    expect(renderer.render(<NotFound/>)).toMatchSnapshot();
  });
});