import React from 'react';
import OrderPreview from '../';
import ReactTestRenderer from 'react-test-renderer/shallow';

const renderer = new ReactTestRenderer();

describe('OrderPreview', () => {
  it('Renders consistently with full information', () => {
    const props = {
      order: {
        id: 123,
        ref: "mockref-asdf1245",
        status: 'OK',
        tracking: {
          carrier: 'USPS',
          trackingCode: '123412353453254324',
          status: 'IN_TRANSIT'
        },
        items: [
          {
            sku: '123-123-123',
            name: 'Test Product',
            amount: 115
          },
          {
            sku: '456-456-456',
            name: 'Test Product Two',
            amount: 79
          }
        ],
        discounts: [
          {
            name: "Mock Family & Friends",
            type: 'percentage',
            value: 10
          },
          {
            name: "Christmas",
            type: 'amount',
            value: 10
          }
        ]
      }
    };
    expect(renderer.render(<OrderPreview {...props}/>)).toMatchSnapshot();
  });
});
