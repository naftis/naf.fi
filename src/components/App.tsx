import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import Colorbars from './Colorbars';
import Name from './Name';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
`;

const colorAnimation = keyframes`
  from {
    color: #fff;
    font-family: 'Crimson Text', serif;
  }
  to {
    color: #000;
    font-family: 'Crimson Text', serif;
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

    animation: ${colorAnimation} 500ms 7s forwards;
  }
`;

const App = () => (
  <Wrapper>
    <Links id="links">
      <a href="https://linkedin.com/in/pyry-rouvila">linkedin</a>
      <a href="https://github.com/naftis">github</a>
    </Links>
    <Name>Pyry Rouvila</Name>
    <Colorbars />
  </Wrapper>
);

export default App;
