import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const moveAnimation = (numbers: number[]) => keyframes`
  ${numbers.map(
    (value, key) => `${key * 20}% {
      transform: translate(${value}px);
    }`
  )};
`;

const burnAnimation = keyframes`
  from {
    text-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85,
      -0.2em -0.2em 0.4em #ffae34, 0.2em -0.3em 0.3em #ec760c,
      -0.2em -0.4em 0.4em #cd4606, 0.1em -0.5em 0.7em #973716,
      0.1em -0.7em 0.7em #451b0e;
  }
  45% {
    text-shadow: 0.1em -0.2em 0.5em #fefcc9, 0.15em 0 0.4em #feec85,
      -0.1em -0.25em 0.5em #ffae34, 0.15em -0.45em 0.5em #ec760c,
      -0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
      0.2em -1em 0.8em #451b0e;
  }
  70% {
    text-shadow: -0.1em 0 0.3em #fefcc9, 0.1em -0.1em 0.3em #feec85,
      -0.2em -0.2em 0.6em #ffae34, 0.2em -0.3em 0.4em #ec760c,
      -0.2em -0.4em 0.7em #cd4606, 0.1em -0.5em 0.7em #973716,
      0.1em -0.7em 0.9em #451b0e;
  }
  to {
    text-shadow: -0.1em -0.2em 0.6em #fefcc9, -0.15em 0 0.6em #feec85,
      0.1em -0.25em 0.6em #ffae34, -0.15em -0.45em 0.5em #ec760c,
      0.1em -0.5em 0.6em #cd4606, 0 -0.8em 0.6em #973716,
      -0.2em -1em 0.8em #451b0e;
  }
`;


const outFromScreenAnimation = keyframes`
  from {
    transform: translate(0);
    z-index: 0;
  }
  99% {
    transform: translate(100vw);
    z-index: 0;
  }
  to {
    transform: translate(0);
    z-index: -2;
    text-shadow: none;
    font-family: 'Crimson Text';

    -moz-text-stroke-color: #000;
    -webkit-text-stroke-color: #000;
    -moz-text-fill-color: #fff;
    -webkit-text-fill-color: #fff;
    -moz-text-stroke-width: 1px;
    -webkit-text-stroke-width: 1px;

    font-style: normal;
  }
`;


const NameWrapper = styled.div`
  color: #000;
  font-size: 10rem;
  user-select: none;
  font-style: italic;

  -moz-text-stroke-color: #ff2f00;
  -webkit-text-stroke-color: #ff2f00;
  -moz-text-fill-color: #fbff05;
  -webkit-text-fill-color: #fbff05;
  -moz-text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;

  animation: ${burnAnimation} 1.5s linear infinite alternate,
    ${outFromScreenAnimation} 1s cubic-bezier(0.41, -0.48, 0, 1)
      5s forwards;

  @media (max-width: 1500px) {
    font-size: 7rem;
  }
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`;

interface ILetterProps {
  moveAnimation: string;
}

const Letter = styled.span`
  display: inline-block;
  white-space: pre;
  animation: ${(p: ILetterProps) => p.moveAnimation} 0.15s step-end ${Math.round(5 / 0.15)};
`;

function generateLetters(text: string) {
  const letters = text.split('');

  return letters.map((letter, key) => {
    const randomValues = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 3)
    );

    return (
      <Letter
        moveAnimation={moveAnimation(randomValues)}
        key={`letter_${key}`}
      >
        {letter}
      </Letter>
    );
  });
}

class Name extends React.Component<{}, {}> {
  public render() {
    const name = String(this.props.children);

    return <NameWrapper>{generateLetters(name)}</NameWrapper>;
  }
}

export default Name;
