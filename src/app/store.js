import { combineReducers, compose, createStore as createReduxStore, applyMiddleware } from 'redux';
import {
  routerForBrowser,
} from 'redux-little-router';
import mainReducers from './reducers';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from './saga';
import routes from './routes';

const sagaMiddleware = createSagaMiddleware();

const { reducer, middleware, enhancer } = routerForBrowser({
  routes
});

export function createStore() {

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createReduxStore(
      combineReducers({router: reducer, ...mainReducers}),
      composeEnhancers(enhancer, applyMiddleware(sagaMiddleware, middleware))
  );

  sagaMiddleware.run(rootSaga);

  store.close = () => store.dispatch(END);

  return store;

}