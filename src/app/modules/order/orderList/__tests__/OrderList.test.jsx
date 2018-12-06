import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import OrderList from '../OrderList';
import {mount} from 'enzyme';

const renderer = new ReactShallowRenderer();

describe('OrderList', () => {
  it('Consistently renders loading component when data has not arrived yet', () => {
    const props = {
      orders: undefined,
      id: 111,
      requestUserOrders: jest.fn(),
      push: jest.fn()
    };
    expect(renderer.render(<OrderList {...props}/>)).toMatchSnapshot();
  });
  it('Consistently renders with non-empty orders list', () => {
    const props = {
      orders: [
          {
            id: 123,
            ref: "mockref123-456",
            status: "ok",
            items: [{sku: "123-123-123", name: "Test Product", amount: 120}],
          },
          {
            id: 456,
            ref: "mockref908-765",
            status: "ok",
            items: [{sku: "123-123-123", name: "Test Product", amount: 120}],
          }],
      id: 111,
      requestUserOrders: jest.fn(),
      push: jest.fn()
    };
    expect(renderer.render(<OrderList {...props}/>)).toMatchSnapshot();
  });
  it('Redirects on mount if user is not logged in', () => {
    const props = {
      orders: undefined,
      id: null,
      requestUserOrders: jest.fn(),
      push: jest.fn()
    };
    const comp = <OrderList {...props}/>;
    expect(props.push).not.toHaveBeenCalled();

    mount(comp);
    expect(props.push).toHaveBeenLastCalledWith("/login");
  });
  it('Fetches user orders on mount if user is logged in', () => {
    const props = {
      orders: undefined,
      id: 123,
      requestUserOrders: jest.fn(),
      push: jest.fn()
    };
    const comp = <OrderList {...props}/>;
    expect(props.requestUserOrders).not.toHaveBeenCalled();

    mount(comp);
    expect(props.requestUserOrders).toHaveBeenLastCalledWith({userId: 123});
  });
});