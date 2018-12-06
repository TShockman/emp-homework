import {connect} from 'react-redux';
import OrderList from './OrderList';
import {selectUserState} from '../selectors';
import {USER_ORDERS_REQUESTED} from '../actions';
import {selectAuthState} from '../../auth/selectors';
import {push} from 'redux-little-router';

function mapStateToProps(state) {
  const {orders} = selectUserState(state);
  const {id} = selectAuthState(state)
  return {id, orders};
}

function mapDispatchToProps(dispatch) {
  return {
    requestUserOrders: ({id}) => dispatch({
      type: USER_ORDERS_REQUESTED,
      id
    }),
    push: href => dispatch(push(href))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);