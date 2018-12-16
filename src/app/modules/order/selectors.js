import {NAME} from './actions';

// select the list of orders for a given userId
export const selectUserOrders = (state, userId) => state[NAME].get(userId.toString());