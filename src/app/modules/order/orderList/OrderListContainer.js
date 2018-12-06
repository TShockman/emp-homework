import {connect} from 'react-redux';
import OrderList from './OrderList';
import {selectUserState} from '../../user/selectors';
import {GET_ORDERS_REQUESTED} from '../actions';
import {selectAuthState} from '../../auth/selectors';
import {push} from 'redux-little-router';
import {selectUserOrders} from '../selectors';

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