// @flow
import openSocket from 'socket.io-client';

import { incrementExp, decrementExp } from '../model/actions';

const connectSocketToStore = store => {
  const socket = openSocket('http://localhost:5000');
  socket.on('throwingAttempt', ({ thrown, correct }) => {
    console.log('throwingAttempt', { thrown, correct });
    store.dispatch(thrown === correct ? incrementExp() : decrementExp());
  });

  document.body.onkeydown = ({ keyCode }: { keyCode: number }) => {
    switch (keyCode) {
      case 38:
        store.dispatch(incrementExp());
        break;
      case 40:
        store.dispatch(decrementExp());
        break;
    }
  };
};

export default connectSocketToStore;
