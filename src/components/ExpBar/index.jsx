// @flow
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div`
  position: absolute;
  margin-left: -210px;
  left: 50%;
  bottom: 96px;
`;

const Text = styled.div`
  display: inline-block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
  width: 210px;
  text-align: ${props => props.align || 'left'};
`;

const Bar = styled.div`
  width: ${props => props.exp}%;
  height: 100%;
  background-color: #0096ff;
  transition: width ${props => (props.full ? 0 : 1)}s;
`;

const BarContainer = styled.div`
  border: 3px solid #000;
  background-color: #fff;
  width: 420px;
  height: 20px;
`;

const ExpBar = ({ stats }: PropsType) => {
  return (
    <Container>
      <Text>Exp</Text>
      <Text align="right">
        {stats.exp} / {stats.level}
      </Text>
      <BarContainer>
        <Bar exp={(stats.exp * 100) / stats.level} full={stats.exp === 0} />
      </BarContainer>
    </Container>
  );
};

function mapStateToProps(state) {
  return { stats: state.stats };
}

export default connect(mapStateToProps)(ExpBar);
