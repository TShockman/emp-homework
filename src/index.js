import React from 'react';
import ReactDOM from 'react-dom';
import Root from './app/Root';
import {initializeCurrentLocation} from "redux-little-router";
import {createStore} from './app/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

// create redux store
const store = createStore();

// redux-little-router initialization
const initialLocation = store.getState().router;
if (initialLocation) {
  store.dispatch(initializeCurrentLocation(initialLocation));
}

// render root
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
