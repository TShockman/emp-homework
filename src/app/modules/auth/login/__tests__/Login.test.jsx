import React from 'react';
import { mount } from 'enzyme';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';

const renderer = new ReactShallowRenderer();

describe('Login', () => {
  it('Renders consistently', () => {
    const props = {
      requestLogin: jest.fn(),
      id: null
    };
    expect(renderer.render(<Login {...props}/>)).toMatchSnapshot();
  });
  it('Updates volatile state on form update', () => {
    const props = {
      requestLogin: jest.fn(),
      id: null
    };
    const wrapper = mount(<Login {...props}/>);
    expect(wrapper.state().username).toBe('');

    const mockEvent = {
      stopPropagation: jest.fn(),
      target: {
        id: 'username',
        value: 'mockuser'
      }
    };
    wrapper.instance().handleFormUpdate(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    expect(wrapper.state().username).toBe('mockuser');
    wrapper.unmount();
  });
  it('Requests login on form submission', () => {
    const props = {
      requestLogin: jest.fn(),
      id: null
    };
    const wrapper = mount(<Login {...props}/>);
    wrapper.instance().setState({username: 'jondo', password: '12345'});

    const mockEvent = {
      stopPropagation: jest.fn()
    };
    wrapper.instance().handleSubmit(mockEvent);
    expect(mockEvent.stopPropagation).toHaveBeenCalledTimes(1);
    expect(props.requestLogin).toHaveBeenCalledWith({username: 'jondo', password: '12345'});
  });
});