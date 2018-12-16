import { combineReducers, compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import {
  routerForBrowser,
} from 'redux-little-router';
import mainReducers from './reducers';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from './saga';
import routes from './routes';

// create the redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// create the redux-little-router
const { reducer, middleware, enhancer } = routerForBrowser({routes});

// create and return the redux store, combining router reducer with app reducers
// additionally, hook in redux-saga middleware
export function createStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createReduxStore(
      combineReducers({router: reducer, ...mainReducers}),
      composeEnhancers(enhancer, applyMiddleware(sagaMiddleware, middleware))
  );

  // kick off redux-saga root
  sagaMiddleware.run(rootSaga);

  // dispatch END to close down store when the time comes
  store.close = () => store.dispatch(END);
  return store;
}