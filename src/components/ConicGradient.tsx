import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const vinylSpinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const toFullscreenAnimation = keyframes`
  from {
    width: 0%;
    height: 0%;
    transform: rotate(0deg);
  }

  to {
    border-radius: 0;
    width: 100vmax;
    height: 100vmax;
    transform: rotate(3600deg);
  }
`;

const toBallAnimation = keyframes`
  from {
    border-radius: 0;
    width: 100vmax;
    height: 100vmax;
  }

  to {
    border-radius: 50%;
    width: 100vmin;
    height: 100vmin;
    border: 2px solid #fff;
  }
`;

const backgroundAnimation = keyframes`
  from {
    background: #fff;
  }

  to {
    background: conic-gradient(
      #001eff,
      #f000ff,
      #4deeea,
      #ffe700,
      #74ee15,
      #001eff
    );
    background-position: center;
    background-size: 100vmax 100vmax;
  }
`;

const GradientWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -3;

  animation: ${backgroundAnimation} 0s 17s forwards;
`;

const GradientBox = styled.div`
  animation: ${toFullscreenAnimation} 5s 12s forwards,
    ${toBallAnimation} 1s 17s forwards,
    ${vinylSpinAnimation} 10s linear 17s infinite;

  background: conic-gradient(
    #001eff,
    #f000ff,
    #4deeea,
    #ffe700,
    #74ee15,
    #001eff
  );
  border-radius: 50%;
  box-shadow: inset 0 0 40px 0 rgba(255, 255, 255, 0.6);
`;

const ConicGradient: React.SFC<{}> = () => (
  <GradientWrapper>
    <GradientBox />
  </GradientWrapper>
);

export default ConicGradient;
