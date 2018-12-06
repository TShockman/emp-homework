import {LOGIN_URL, USER_URL} from './endpoints';
import {parseResponse} from './utils';

const _singleton = Symbol();

export default class UserService {
  constructor(singletonToken) {
    if(_singleton !== singletonToken) {
      throw new Error('Cannot instantiate directly');
    }
  }

  static get instance() {
    if(!this[_singleton]) {
      this[_singleton] = new UserService(_singleton);
    }
    return this[_singleton];
  }

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

  getUser(id) {
    return fetch(`${USER_URL}/${id}`, {
      method: 'GET'
    })
        .then(parseResponse);
  }

  getUserOrders(id) {
    return fetch(`${USER_URL}/${id}/orders`, {
      method: 'GET'
    })
        .then(parseResponse);
  }
}