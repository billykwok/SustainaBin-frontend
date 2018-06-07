// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Background from '../Background';
import Bear from '../Bear';
import LevelIndicator from '../LevelIndicator';
import ExpBar from '../ExpBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: #8ad5ff;
  padding: 32px;
  box-sizing: border-box;
`;

const CharacterName = styled.div`
  position: absolute;
  margin-left: -210px;
  left: 50%;
  bottom: 24px;
  width: 420px;
  text-align: center;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
`;

const AnimalScene = ({ stats, emotion }: { stats: any, emotion: string }) => (
  <Container>
    <Background />
    <LevelIndicator />
    <Bear level={stats.level} emotion={emotion} />
    <ExpBar />
    <CharacterName>Bear</CharacterName>
  </Container>
);

function mapStateToProps(state) {
  return { stats: state.stats, emotion: state.emotion };
}

export default connect(mapStateToProps)(AnimalScene);
