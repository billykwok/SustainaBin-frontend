// @flow
import { PLASTIC } from './trashTypes';
import { NORMAL } from './emotions';

const initialState = {
  character: PLASTIC,
  emotion: NORMAL,
  stats: { level: 1, exp: 0 }
};

export default initialState;
