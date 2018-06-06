// @flow
export const UPDATE_PAGE_SCROLL_POSITION = 'UPDATE_PAGE_SCROLL_POSITION';
export const UPDATE_PROJECTS = 'UPDATE_PROJECTS';

export function updateWindowScrollPosition(route, position) {
  return { type: UPDATE_PAGE_SCROLL_POSITION, route, position };
}

export function updateProjects(projects) {
  return { type: UPDATE_PROJECTS, projects };
}
