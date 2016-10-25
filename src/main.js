/* global document, __DEV__, window */

import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';

const store = createStore();

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <AppContainer
      store={store}
    />,
    MOUNT_NODE
  );
};

render();
