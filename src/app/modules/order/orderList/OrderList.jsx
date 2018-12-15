import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../common/loading';
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
        <div className="album">
          <div className="row">
          {orders.map(order => <div className="col-sm-6" key={order.id}><OrderPreview order={order}/></div>)}
          </div>
        </div>
    );
  }
}