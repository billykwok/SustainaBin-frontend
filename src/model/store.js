// @flow
import { createStore } from 'redux';

import initialState from './initialState';
import reducers from './reducers';

console.log(reducers);

export default createStore(reducers, initialState);
