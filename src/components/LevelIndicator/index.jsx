// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 48px;
  font-size: 48px;
  font-weight: bold;
  text-align: left;
`;

const LevelIndicator = ({ level }: { level: number }) => (
  <Container>Level {level}</Container>
);

function mapStateToProps(state) {
  return { level: state.stats.level };
}

export default connect(mapStateToProps)(LevelIndicator);
