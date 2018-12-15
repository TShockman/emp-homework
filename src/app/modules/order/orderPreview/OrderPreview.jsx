import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import style from './orderPreview.scss';

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

    let tracking;
    if (order.tracking) {
      tracking = (
          <ul className="list-group">
            <li className="list-group-item">Carrier: <span className="fr">{order.tracking.carrier}</span></li>
            <li className="list-group-item">Tracking Code: <span className="fr">{order.tracking.trackingCode}</span></li>
            <li className="list-group-item">Status: <span className="fr">{order.tracking.status}</span></li>
          </ul>);
    } else {
      tracking = (
          <ul className="list-group">
            <li className="list-group-item">Not Available</li>
          </ul>);
    }

    const items = (
        <ul className="list-group">
          {order.items.map(item => (
            <li className="list-group-item">
              <span>{item.name} <small>({item.sku})</small> <b className="fr">${item.amount}</b></span>
            </li>
          ))}
        </ul>);

    let discounts = null;
    if (order.discounts) {
      discounts = (
          <div>
            <h5>Discounts:</h5>
            <div>
              <ul className="list-group">
                {order.discounts.map(discount => {
                  let discountAmt;
                  switch (discount.type) {
                    case 'percent':
                      discountAmt = <b className="fr">(-{discount.value}%)</b>;
                      break;
                    case 'amount':
                      discountAmt = <b className="fr">(-${discount.value})</b>;
                      break;
                    default:
                      discountAmt = null;
                  }
                  return (
                    <li className="list-group-item">
                      <span>{discount.name} {discountAmt}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
      );
    }

    return (
        <div className={cx("card", "orderPreview")}>
          <div className="card-header">
            <h3 className="card-title">Order {order.ref}</h3>
            <h4 className="card-subtitle">Status: {order.status}</h4>
          </div>
          <div className="card-body">
            <div>
              <h5>Items:</h5>
              <div>
                {items}
              </div>
            </div>
            {discounts}
            <div>
              <h5>Tracking:</h5>
              <div>
                {tracking}
              </div>
            </div>
            <button>View/Edit Order</button>
          </div>
        </div>
        );
  }
}