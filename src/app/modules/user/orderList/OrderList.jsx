import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading';
import {ListGroup, ListGroupItem} from 'reactstrap';
import OrderPreview from '../orderPreview'

export default class OrderList extends PureComponent {
  static propTypes = {
    orders: PropTypes.array,
    id: PropTypes.number,
    router: PropTypes.object.isRequired,
    requestUserOrders: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    const {orders, id, router, requestUserOrders, push} = this.props;
    const {id: routerId} = router.params;

    if (id === null) {
      return push('/login');
    } else if (id.toString() !== routerId) {
      console.log('Can only view orders of user logged in.');
      // TODO: handle this differently?
      return push(`/user/${id}/orders`);
    } else {
      return requestUserOrders({id: router.params.id});
    }
  }

  render() {
    const {orders} = this.props;
    if (!orders) {
      return <Loading/>;
    }
    console.log(orders)

    return (
        <ListGroup>
          {orders.map(order => <ListGroupItem key={order.id}><OrderPreview order={order}/></ListGroupItem>)}
        </ListGroup>
    );
  }
}