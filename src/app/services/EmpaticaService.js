import {LOGIN_URL, USER_URL} from './endpoints';
import {parseResponse} from './utils';

// ensure there's only ever one service
const _singleton = Symbol();

// service helper for interacting with the Empatica Server
export default class EmpaticaService {
  constructor(singletonToken) {
    if(_singleton !== singletonToken) {
      throw new Error('Cannot instantiate directly');
    }
  }

  static get instance() {
    if(!this[_singleton]) {
      this[_singleton] = new EmpaticaService(_singleton);
    }
    return this[_singleton];
  }

  // login the user specified by user
  // user is {username, password} object
  login(user) {
    return fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
        .then(parseResponse);
  }

  // get the user with userId id
  getUser(id) {
    return fetch(`${USER_URL}/${id}`, {
      method: 'GET'
    })
        .then(parseResponse);
  }

  // get the orders for user with userId id
  getUserOrders(id) {
    return fetch(`${USER_URL}/${id}/orders`, {
      method: 'GET'
    })
        .then(parseResponse);
  }
}