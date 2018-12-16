import {NAME} from './actions';

// simple domain state selector
export const selectAuthState = state => state[NAME];
