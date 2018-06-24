import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const BarsWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  z-index: -1;
`;

const slideUpAnimation = keyframes`
  from {
    height: 100vh;
  }
  to {
    height: 0vh;
  }
`;

const Darkblue = styled.div`
  background: #001eff;
  width: 20vw;
  height: 100vh;

  animation: ${slideUpAnimation} 1s 6s forwards;
`;

const Pink = styled.div`
  background: #f000ff;
  width: 20vw;
  height: 100vh;

  animation: ${slideUpAnimation} 0.9s 6.5s forwards;
`;

const Lightblue = styled.div`
  background: #4deeea;
  width: 20vw;
  height: 100vh;

  animation: ${slideUpAnimation} 0.75s 7s forwards;
`;

const Yellow = styled.div`
  background: #ffe700;
  width: 20vw;
  height: 100vh;

  animation: ${slideUpAnimation} 0.65s 7.5s forwards;
`;

const Green = styled.div`
  background: #74ee15;
  width: 20vw;
  height: 100vh;

  animation: ${slideUpAnimation} 0.55s 8s forwards;
`;

const Colorbars = () => (
  <BarsWrapper>
    <Darkblue />
    <Pink />
    <Lightblue />
    <Yellow />
    <Green />
  </BarsWrapper>
);

export default Colorbars;