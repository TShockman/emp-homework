import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading';
import {ListGroup, ListGroupItem} from 'reactstrap';
import OrderPreview from '../orderPreview'

export default class OrderList extends PureComponent {
  static propTypes = {
    orders: PropTypes.array,
    id: PropTypes.number,
    requestUserOrders: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const {id, requestUserOrders, push} = this.props;

    if (id === null) {
      return push('/login');
    }

    return requestUserOrders({userId: id});
  };

  render() {
    const {orders} = this.props;
    if (!orders) {
      return <Loading/>;
    }

    return (
        <ListGroup>
          {orders.map(order => <ListGroupItem key={order.id}><OrderPreview order={order}/></ListGroupItem>)}
        </ListGroup>
    );
  }
}