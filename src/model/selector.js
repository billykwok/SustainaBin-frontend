// @flow
import { createSelector } from 'reselect';

const getPathName = state => state.location.pathname;
const getScrollPosition = state => state.scrollPosition;

const getProjects = state => state.projects;
const getCurrentProjectId = state => state.location.payload.projectId || null;

export const getDateParsedProjects = createSelector(getProjects, projects =>
  projects.map(p => ({ ...p, startingDate: new Date(p.startingDate) }))
);

export const getProjectsSortedByDescDateGroupedByYear = createSelector(
  getDateParsedProjects,
  projects =>
    projects
      .slice()
      .sort((a, b) => {
        if (a.status === 'Ongoing' && b.status === 'Ended') return -1;
        if (a.status === 'Ended' && b.status === 'Ongoing') return 1;
        return b.startingDate - a.startingDate;
      })
      .reduce((acc, project) => {
        const year = project.startingDate.getFullYear();
        (acc[year] = acc[year] || []).push(project);
        return acc;
      }, {})
);

export const getCurrentProject = createSelector(
  [getDateParsedProjects, getCurrentProjectId],
  (projects, projectId) => projects.find(p => p.id === projectId) || null
);

export const getCurrentScrollPosition = createSelector(
  [getScrollPosition, getPathName],
  (scrollPosition, pathname) =>
    pathname in scrollPosition ? scrollPosition[pathname] : 0
);
