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

const Colorbar = styled.div`
  width: 20vw;
  height: 100vh;
`;

const Darkblue = styled(Colorbar)`
  background: #001eff;
  animation: ${slideUpAnimation} 1s 6s forwards;
`;

const Pink = styled(Colorbar)`
  background: #f000ff;
  animation: ${slideUpAnimation} 0.9s 6.5s forwards;
`;

const Lightblue = styled(Colorbar)`
  background: #4deeea;
  animation: ${slideUpAnimation} 0.75s 7s forwards;
`;

const Yellow = styled(Colorbar)`
  background: #ffe700;
  animation: ${slideUpAnimation} 0.65s 7.5s forwards;
`;

const Green = styled(Colorbar)`
  background: #74ee15;
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