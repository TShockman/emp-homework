import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading';
import OrderPreview from '../orderPreview';
import style from './orderList.scss';

// Component to display the current user's list of orders. Is
// fully connected by './OrderListContainer.js' and should be imported
// from './index.js'
// NOTE: in retrospect it might have be better to have this component
// take orders as a prop from it's parent, rather than have it's container
// directly pull it out of the store. This would have decoupled the order
// list from the single-unprivileged-user-details case and allowed for
// easier implementation of an admin view or other uses of a user list.
// If this were the case, the componentDidMount function would not be necessary.
export default class OrderList extends PureComponent {
  static propTypes = {
    orders: PropTypes.array,
    id: PropTypes.number,
    requestUserOrders: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  // redirect user to the login page if they are not logged in,
  // otherwise request the user's orders
  componentDidMount = () => {
    const {id, requestUserOrders, push} = this.props;
    if (id === null) {
      return push('/login');
    }
    return requestUserOrders({userId: id});
  };

  render() {
    const {orders} = this.props;

    // show loading animation if we don't have the orders yet
    if (!orders) {
      return <Loading/>;
    }

    return (
        <div className="album">
          <div className="row">
          {orders.map(order => <div className="col-md-6" key={order.id}><OrderPreview order={order}/></div>)}
          </div>
        </div>
    );
  }
}