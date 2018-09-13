import { applyMiddleware, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { history } from '../app';
import rootReducer from './reducer';

/* eslint-disable no-underscore-dangle */

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(applyMiddleware(routerMiddleware(history), thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */
export default store;
