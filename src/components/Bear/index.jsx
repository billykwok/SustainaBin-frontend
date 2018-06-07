// @flow
import React from 'react';
import styled from 'styled-components';

import { NORMAL, HAPPY, SAD } from '../../model/emotions';
import Stage1Body from './Stage1Body';
import Stage2Body from './Stage2Body';
import Stage3Body from './Stage3Body';

const SVG = styled.svg`
  position: absolute;
  left: 50%;
  margin-left: -210px;
  top: 48px;
`;

type PropsType = { level: number, emotion: string };

const Bear = ({ level = 1, emotion = NORMAL }: PropsType) => (
  <SVG width="420" height="320">
    <g fill="none" fillRule="evenodd">
      <g transform="translate(113 26)">
        {level >= 6 && (
          <path
            d="M48 97c16.333 13.333 32.667 20 49 20s32.667-6.667 49-20c34.667 77.417 49.333 121.417 44 132-8 15.875-70.803 11.67-93 13-22.197 1.33-66 2-84-13-12-10-.333-54 35-132z"
            fill="#982A2A"
          />
        )}
        {level >= 5 && <Stage3Body />}
        {level >= 2 && level < 5 && <Stage2Body />}
        {level < 2 && <Stage1Body />}
        {level >= 3 && (
          <g transform="translate(0 -10)">
            <path
              d="M57 111c11.526 22.529 24.86 41.196 40 56 15.14 14.804 30.808 30.804 47 48"
              stroke="#4B2A0C"
              strokeWidth="10"
            />
            <path
              d="M116.844 173.22l4.579-1.666c.837-.305 1.173-.328 1.539-.276.366.052.694.205.969.452.275.246.473.518.778 1.356l1.175 3.23-9.397 3.42-1.175-3.23c-.305-.837-.328-1.173-.276-1.539.052-.366.205-.693.452-.969.247-.275.519-.473 1.356-.778z"
              fill="#66AFD9"
            />
            <rect
              fill="#B6E5FF"
              transform="rotate(-20 128.026 196.82)"
              x="120.026"
              y="176.819"
              width="16"
              height="40"
              rx="2"
            />
          </g>
        )}
        {level >= 6 && (
          <path
            d="M48 97c16.333 13.333 32.667 20 49 20s32.667-6.667 49-20c5.333.833 5.333 6.542 0 17.125C138 130 119.197 129.669 97 131c-22.197 1.33-31 4-49-11-12-10-12-17.667 0-23z"
            fill="#AE2A2A"
          />
        )}
        <path
          d="M41 46c13.255 0 24-10.745 24-24S54.255 0 41 0C25 0 20 4 20 20c0 13.255 7.745 26 21 26z"
          fill="#7C4B1F"
        />
        <path
          d="M41 36c11 0 15-3 15-14S44 9 41 9c-8.997 0-12 3-12 11 0 3 1 16 12 16z"
          fillOpacity=".502"
          fill="#000"
        />
        <path
          d="M153 46c-13.255 0-24-10.745-24-24s10.745-22 24-22c16 0 21 4 21 20 0 13.255-7.745 26-21 26z"
          fill="#7C4B1F"
        />
        <path
          d="M153 36c-11 0-15-3-15-14s12-13 15-13c8.997 0 12 3 12 11 0 3-1 16-12 16z"
          fillOpacity=".502"
          fill="#000"
        />
        <path
          d="M97 4c34.903 0 56.479 14.623 63.951 39 2.452 8 2.998 15 0 28-3.6 15.615-25.32 48-63.951 48-38.63 0-60.35-32.385-63.951-48-2.998-13-2.452-20 0-28C40.52 18.623 62.097 4 97 4z"
          fill="#7C4B1F"
        />
        <path
          d="M97 116c14.882 0 36-12.984 36-29s-16.118-29-36-29-36 12.984-36 29 21.118 29 36 29z"
          fillOpacity=".364"
          fill="#FFF"
        />
        {emotion === SAD && (
          <path
            fill="#94BED6"
            d="M129 55l9 50 9-9-13-43zm-64 0l-9 50-9-9 13-43z"
          />
        )}
        <circle fill="#000" cx="65" cy="47" r="9" />
        <circle fill="#000" cx="129" cy="47" r="9" />
        <circle fill="#FFF" cx="131" cy="45" r="4" />
        <circle fill="#FFF" cx="67" cy="45" r="4" />
        {emotion === HAPPY && (
          <g transform="translate(60 48)">
            <circle fill="#FFF" cx="1.5" cy="1.5" r="1.5" />
            <circle fill="#FFF" cx="65.5" cy="1.5" r="1.5" />
            <path
              d="M37 63c7.732 0 17-8 17-15.5S44.732 37 37 37c-7.732 0-17 3-17 10.5S29.268 63 37 63z"
              fill="#000"
            />
          </g>
        )}
        {emotion === SAD && (
          <path
            d="M80 98c5.667-3.333 11.333-5 17-5s11.333 1.667 17 5"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        )}
        <ellipse fill="#000" cx="97" cy="65" rx="9" ry="5" />
        <path
          d="M97 74c3 0 2-2.239 2-5s-.895-5-2-5-2 2.239-2 5-1 5 2 5z"
          fill="#000"
        />
        {emotion === NORMAL && (
          <path
            d="M80 96c5.667 2.667 11.333 4 17 4s11.333-1.333 17-4"
            stroke="#000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </g>
      {level >= 9 && (
        <path
          d="M180 27l8-20 12 20 11-20 12 20 12-20 7 20-5 18c-8.667 2-17.333 3-26 3-8.667 0-17.333-1-26-3l-5-18z"
          fill="#E5AB33"
        />
      )}
      {level >= 7 && (
        <React.Fragment>
          <path fill="#CDF0FF" d="M27 146l3 23 83 50 9-13-72-64z" />
          <path fillOpacity=".1" fill="#000" d="M27 146l3 23 83 50 4.5-6.5z" />
          <path fill="#45626E" d="M110 216l29 17 4-7-24-24.5z" />
          <path fill="#557583" d="M104 219l17-27 10 13.5-13.5 19.5z" />
        </React.Fragment>
      )}
      {level >= 8 && (
        <path
          d="M269.55 101.28c-1.131 1.208-2.544 6.794-5.502 23.568-8.358 47.404 1.164 76.17 29.356 81.142 28.193 4.97 46.98-18.804 55.338-66.208 2.958-16.775 3.54-22.506 2.89-24.028-.402-.124-1.1-.22-2.135-.258-1.672-.062-10.748.298-11.927.322-9.112.184-17.775-.375-27.885-2.158-10.11-1.783-18.442-4.22-26.942-7.51-1.1-.425-9.506-3.868-11.098-4.382-.986-.318-1.674-.467-2.094-.487z"
          stroke="#828282"
          strokeWidth="10"
          fill="#747474"
        />
      )}
    </g>
  </SVG>
);

export default Bear;
