import React from 'react';
import { Global, css } from '@emotion/core';
import Background from './Background';
import Info from './Info';
import Name from './Name';

const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: #000;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Background />

      <Name />

      <Info id="info" role="nav">
        <a href="https://linkedin.com/in/naf/">LinkedIn</a>
        <a href="https://github.com/naftis">GitHub</a>
      </Info>
    </>
  );
}

export default App;
