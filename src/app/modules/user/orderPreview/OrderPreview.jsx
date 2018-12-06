import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class OrderPreview extends PureComponent {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.number.isRequired,
      ref: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      tracking: PropTypes.shape({
        carrier: PropTypes.string,
        trackingCode: PropTypes.string,
        status: PropTypes.string
      }),
      items: PropTypes.arrayOf(PropTypes.shape({
        sku: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
      })).isRequired,
      discounts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      }))
    }).isRequired
  };

  render() {
    const {order} = this.props;
    return (
        <div>
          {order.ref}
        </div>
        );
  }
}