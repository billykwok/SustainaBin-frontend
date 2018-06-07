// @flow
import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
`;

const Background = () => (
  <SVG width="800" height="480">
    <g fill="none" fillRule="evenodd">
      <path
        d="M697 293c-100 0-237.667 62.333-413 187h646v-65c-52.867-74.191-149.339-122-233-122z"
        fill="#31733B"
      />
      <path
        d="M233 293c100 0 237.667 62.333 413 187H0v-65c52.867-74.191 149.339-122 233-122z"
        fill="#41894B"
      />
    </g>
  </SVG>
);

export default Background;
