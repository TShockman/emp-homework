/* eslint-disable import/first */
jest.mock('../../../order/orderList');

import React from 'react';
import UserDetails from '../UserDetails';
import {mount} from 'enzyme';
import ReactTestRenderer from 'react-test-renderer/shallow';

const renderer = new ReactTestRenderer();

const getProps = () => ({
  router: {params: {id: '1'}},
  user: {
    id: 1,
    firstName: 'Bob',
    lastName: 'Jones',
    email: 'bob.jones.1@mail.net'
  },
  requestUser: jest.fn(),
  id: 1,
  push: jest.fn()
});

describe('User Details', () => {
  it('Renders loading without user', () => {
    const props = getProps();
    props.user = null;
    expect(renderer.render(<UserDetails {...props}/>)).toMatchSnapshot();
  });
  it('Renders consistently with user', () => {
    const props = getProps();
    expect(renderer.render(<UserDetails {...props}/>)).toMatchSnapshot();
  });
  it('Redirects to login on mount if not logged in', () => {
    const props = getProps();
    props.id = null;
    const comp = <UserDetails {...props}/>;
    expect(props.push).not.toHaveBeenCalled();
    expect(props.requestUser).not.toHaveBeenCalled();

    const wrapper = mount(comp);
    expect(props.push).toHaveBeenLastCalledWith('/login');
    expect(props.requestUser).not.toHaveBeenCalled();
    wrapper.unmount();
  });
  it('Redirects to own users page if user tries to access another user page', () => {
    const props = getProps();
    props.id = 777;
    const comp = <UserDetails {...props}/>;
    expect(props.push).not.toHaveBeenCalled();
    expect(props.requestUser).not.toHaveBeenCalled();

    const wrapper = mount(comp);
    expect(props.push).toHaveBeenLastCalledWith('/user/777');
    expect(props.requestUser).not.toHaveBeenCalled();
    wrapper.unmount();
  });
  it('Fetches user information on mount if logged in', () => {
    const props = getProps();
    const comp = <UserDetails {...props}/>;
    expect(props.push).not.toHaveBeenCalled();
    expect(props.requestUser).not.toHaveBeenCalled();

    const wrapper = mount(comp);
    expect(props.push).not.toHaveBeenCalled();
    expect(props.requestUser).toHaveBeenLastCalledWith({id: '1'});
    wrapper.unmount();
  });
});