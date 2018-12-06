import {NAME} from './actions';

export const selectUserOrders = (state, userId) => state[NAME].get(userId.toString());