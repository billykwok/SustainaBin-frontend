// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AnimalScene from '../AnimalScene';

const Canvas = styled.div`
  width: 800px;
  height: 480px;
  cursor: none;
  > div {
    width: 100%;
    height: 100%;
  }
`;

const App = () => (
  <Canvas>
    <AnimalScene />
  </Canvas>
);

function mapStateToProps(state) {
  return { scene: state.scene };
}

export default connect(mapStateToProps)(App);
