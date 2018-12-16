import {connect} from 'react-redux';
import OrderList from './OrderList';
import {GET_ORDERS_REQUESTED} from '../actions';
import {selectAuthState} from '../../auth/selectors';
import {push} from 'redux-little-router';
import {selectUserOrders} from '../selectors';

// Get authorization info and orders from the store
// Please see the OrderList component for a discussion on
// alternatives to selecting orders here.
function mapStateToProps(state) {
  const {id} = selectAuthState(state);
  const orders = selectUserOrders(state, id);
  return {id, orders};
}

function mapDispatchToProps(dispatch) {
  return {
    requestUserOrders: ({userId}) => dispatch({
      type: GET_ORDERS_REQUESTED,
      userId
    }),
    push: href => dispatch(push(href))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);