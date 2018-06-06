// @flow
import { combineReducers } from 'redux';

import { UPDATE_PAGE_SCROLL_POSITION, UPDATE_PROJECTS } from './actions';
import initialState from './initialState';

function scrollPosition(state: any = initialState.scrollPosition, action: any) {
  return action.type === UPDATE_PAGE_SCROLL_POSITION
    ? { ...state, [action.route]: action.position }
    : state;
}

function projects(state: any = initialState.projects, action: any) {
  return action.type === UPDATE_PROJECTS ? action.projects : state;
}

export default combineReducers({ scrollPosition, projects });
