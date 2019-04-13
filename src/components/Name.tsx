import React from 'react';
import styled from '@emotion/styled/macro';

function drawLineUpRight(x: number, y: number, length: number) {
  return Array.from(
    { length },
    (_, i) => `
    <rect x='${x * 12 + (length - i) * 12}' y='${y * 12 +
      i * 12}' fill='white' opacity='0.2' width='12' height='12' />
  `
  );
}

const pixelLines = `<svg viewBox='0 0 ${12 * 40} ${12 *
  50}' xmlns='http://www.w3.org/2000/svg'>
    ${drawLineUpRight(0, 5, 6)}
    ${drawLineUpRight(16, 10, 12)}
    ${drawLineUpRight(1, 35, 12)}
    ${drawLineUpRight(15, 51, 2)}
  </svg>`;

const Wrapper = styled.main`
  display: flex;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;

  button {
    background: #fff;
    position: relative;
    padding: 0 1rem;
    margin: 0;
    background: none;
    border: 0;
    font-family: 'VT323', monospace;
    font-size: 220px;
    line-height: 1.15em;
    text-transform: lowercase;
    -webkit-text-fill-color: white;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: black;
    text-shadow: -7px 7px 0 #fff, 7px 7px 0 #fff, -7px -7px 0 #fff,
      7px -7px 0 #fff;
    text-align: center;
    color: #000;
    max-width: 80vw;

    @media (max-width: 1000px) {
      font-size: 150px;
    }

    @media (max-width: 600px) {
      font-size: 80px;
      text-shadow: -3px 3px 0 #fff, 3px 3px 0 #fff, -3px -3px 0 #fff,
        3px -3px 0 #fff;
      -webkit-text-fill-color: unset;
      -webkit-text-stroke-width: unset;
      -webkit-text-stroke-color: unset;
    }

    @media (max-width: 350px) {
      padding: 0;
    }

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 24px ridge gray;
      background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml;utf8,${pixelLines}");

      @media (max-width: 600px) {
        outline: 16px ridge gray;
      }
    }
  }
`;

function Name() {
  return (
    <Wrapper id="name" role="main">
      <h1>
        <button>Pyry Rouvila</button>
      </h1>
    </Wrapper>
  );
}

export default Name;
