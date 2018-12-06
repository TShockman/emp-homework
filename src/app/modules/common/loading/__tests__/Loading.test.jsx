import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Loading from '../';

const renderer = new ReactShallowRenderer();

describe('Loading', () => {
  it('Renders consistently', () => {
    expect(renderer.render(<Loading/>)).toMatchSnapshot();
  });
});