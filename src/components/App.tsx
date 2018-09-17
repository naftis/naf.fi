import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Colorbars from './Colorbars';
import ConicGradient from './ConicGradient';
import Name from './Name';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const colorAnimation = keyframes`
  from {
    color: #fff;
    opacity: 1;
  }
  50% {
    font-family: 'Faster One', sans-serif;
    color: #fff;
    opacity: 0;
  }
  51% {
    font-family: 'Crimson Text', serif;
    color: #000;
  }
  to {
    font-family: 'Crimson Text', serif;
    color: #000;
    opacity: 1;
  }
`;

const toWhiteAnimation = keyframes`
  from {
    color: #000;
  }

  to {
    color: #fff;
  }
`;

const Links = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem;

  > a {
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;

    animation: ${colorAnimation} 1s 7s forwards,
      ${toWhiteAnimation} 1s 17s forwards;
  }

  @media (max-width: 420px) {
    width: 100vw;
    text-align: center;
    box-sizing: border-box;
  }
`;

const App = () => (
  <Wrapper>
    <Links id="links">
      <a href="https://linkedin.com/in/pyry-rouvila">linkedin</a>
      <a href="https://github.com/naftis">github</a>
    </Links>
    <Name first="Pyry" last="Rouvila" />
    <Colorbars />
    <ConicGradient />
  </Wrapper>
);

export default App;
