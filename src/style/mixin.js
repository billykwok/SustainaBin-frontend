// @flow
import { css } from 'styled-components';

import mq from './mq';

export const mixinGrid = (gutterRem = 0.25) => css`
  display: flex;
  flex-wrap: wrap;
  margin: -${gutterRem / 2}rem;
`;

export const mixinGridCell = (
  gutterRem = 0.25,
  width = ['100%', null, null, '50%', '100%', '50%', 'calc(100% / 3)']
) => css`
  border: ${gutterRem / 2}rem solid transparent;
  background-clip: padding-box;
  ${mq.width(...width)};
`;

export const mixinSquare = value => css`
  width: ${value};
  height: ${value};
`;
