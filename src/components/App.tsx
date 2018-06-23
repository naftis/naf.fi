import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Name = styled.div`
  color: #000;
  font-family: 'Crimson Text', serif;
  font-size: 7rem;

  -moz-text-stroke-color: black;
  -webkit-text-stroke-color: black;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  -moz-text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
`;

class App extends React.Component {
  public render() {
    return (
      <Wrapper>
        <Name>Pyry Rouvila</Name>
      </Wrapper>
    );
  }
}

export default App;
