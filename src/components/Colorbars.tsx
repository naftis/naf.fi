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
  animation: ${slideUpAnimation} 1s ease-out 6s forwards;
`;

const Darkblue = styled(Colorbar)`
  background: #001eff;
  animation-duration: 1s;
  animation-delay: 6s;
`;

const Pink = styled(Colorbar)`
  background: #f000ff;
  animation-duration: 0.9s;
  animation-delay: 6.5s;
`;

const Lightblue = styled(Colorbar)`
  background: #4deeea;
  animation-duration: 0.75s;
  animation-delay: 7s;
`;

const Yellow = styled(Colorbar)`
  background: #ffe700;
  animation-duration: 0.65s;
  animation-delay: 7.5s;
`;

const Green = styled(Colorbar)`
  background: #74ee15;
  animation-duration: 0.55s;
  animation-delay: 8s;
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