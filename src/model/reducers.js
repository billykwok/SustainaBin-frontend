// @flow
import { combineReducers } from 'redux';

import {
  INCREMENT_EXP,
  DECREMENT_EXP,
  BE_HAPPY,
  BE_SAD,
  BE_NORMAL,
  UPDATE_CHARACTER
} from './actions';
import initialState from './initialState';
import store from './store';
import pathToCorrect from '../assets/audio/correct.mp3';
import pathToIncorrect from '../assets/audio/incorrect.mp3';
import pathToLevelUp from '../assets/audio/levelup.mp3';
import { HAPPY, SAD, NORMAL } from './emotions';

const START_UPGRADING = 'START_UPGRADING';

function emotion(state: any = initialState.emotion, action: any) {
  switch (action.type) {
    case BE_HAPPY:
      return HAPPY;
    case BE_SAD:
      return SAD;
    case BE_NORMAL:
      return NORMAL;
    default:
      return state;
  }
}

function character(state: any = initialState.character, action: any) {
  switch (action.type) {
    case UPDATE_CHARACTER:
      return action.character;
    default:
      return state;
  }
}

function stats(state: any = initialState.stats, action: any) {
  switch (action.type) {
    case INCREMENT_EXP:
      new Audio(pathToCorrect).play();
      if (state.exp + 1 === state.level) {
        setTimeout(() => store.dispatch({ type: START_UPGRADING }), 1000);
      }
      return { level: state.level, exp: state.exp + 1 };
    case DECREMENT_EXP:
      new Audio(pathToIncorrect).play();
      if (state.exp > 0) return { level: state.level, exp: state.exp - 1 };
      return state;
    case START_UPGRADING:
      new Audio(pathToLevelUp).play();
      return { level: state.level + 1, exp: 0 };
    default:
      return state;
  }
}

export default combineReducers({ emotion, character, stats });
