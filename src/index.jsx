// @flow
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import App from './components/App';
import store from './model/store';
import connectSocketToStore from './utils/socket';

connectSocketToStore(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

injectGlobal`${normalize()}`;

export default hot(module)(App);
