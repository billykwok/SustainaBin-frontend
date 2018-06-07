// @flow
import openSocket from 'socket.io-client';

import {
  incrementExp,
  decrementExp,
  beHappy,
  beSad,
  beNormal
} from '../model/actions';

const connectSocketToStore = store => {
  const socket = openSocket('http://localhost:5000');
  socket.on('throwingAttempt', ({ thrown, correct }) => {
    console.log('throwingAttempt', { thrown, correct });
    store.dispatch(thrown === correct ? incrementExp() : decrementExp());
    store.dispatch(thrown === correct ? beHappy() : beSad());
    setTimeout(() => store.dispatch(beNormal()), 1000);
  });

  document.body.onkeydown = ({ keyCode }: { keyCode: number }) => {
    switch (keyCode) {
      case 38:
        store.dispatch(incrementExp());
        store.dispatch(beHappy());
        break;
      case 40:
        store.dispatch(decrementExp());
        store.dispatch(beSad());
        break;
    }
    setTimeout(() => store.dispatch(beNormal()), 1000);
  };
};

export default connectSocketToStore;
