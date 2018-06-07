// @flow
export const UPDATE_EMOTION = 'UPDATE_EMOTION';
export const INCREMENT_EXP = 'INCREMENT_EXP';
export const DECREMENT_EXP = 'DECREMENT_EXP';
export const UPDATE_SCENE = 'UPDATE_SCENE';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const FINISH_UPGRADE = 'FINISH_UPGRADE';

export function updateEmotion(emotion) {
  return { type: UPDATE_EMOTION, emotion };
}

export function incrementExp() {
  return { type: INCREMENT_EXP };
}

export function decrementExp() {
  return { type: DECREMENT_EXP };
}

export function updateScene(scene) {
  return { type: UPDATE_SCENE, scene };
}

export function updateCharacter() {
  return { type: UPDATE_CHARACTER };
}

export function finishUpgrade() {
  return { type: FINISH_UPGRADE };
}
