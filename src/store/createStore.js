/* global __DEV__, window */

import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import blocksReducers from '../reducers/blocksReducers';

export default (initialState = {}, dev = __DEV__) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  if (dev) {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer({
      blocks: blocksReducers,
    }),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  return store;
};
