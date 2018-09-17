import * as React from 'react';
import styled, { css, keyframes } from 'styled-components';

const nameWrapperCss = css`
  color: #000;
  user-select: none;
  font-family: 'Faster One', sans-serif;
  font-style: italic;

  -moz-text-stroke-color: #ff2f00;
  -webkit-text-stroke-color: #ff2f00;
  -moz-text-fill-color: #fbff05;
  -webkit-text-fill-color: #fbff05;
  -moz-text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
`;

const outFromScreenAnimation = keyframes`
  from {
    transform: translate(0);
    z-index: 0;
  }
  99% {
    transform: translate(110vw);
    z-index: 0;

    ${nameWrapperCss}
  }
  to {
    transform: translate(0);
    z-index: -2;
    font-family: 'Crimson Text', serif;
    text-shadow: none;

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
  font-size: 10rem;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  text-align: center;
  justify-content: center;

  > div:first-child {
    padding-right: 0.1em;
  }

  > div:last-child {
    padding-left: 0.1em;
  }

  @media (max-width: 1500px) {
    font-size: 7rem;
  }
  @media (max-width: 700px) {
    font-size: 3.7rem;
    line-height: 1.1em;

    > div {
      width: 100%;
      padding: 0;
    }
  }

  animation: ${outFromScreenAnimation} 1s cubic-bezier(0.41, -0.48, 0, 1) 5s forwards;

  ${nameWrapperCss};
`;

interface ILetterProps {
  moveAnimation: string;
}

const Letter = styled.span`
  display: inline-block;
  white-space: pre;
  animation: ${(p: ILetterProps) => p.moveAnimation} 0.15s step-end
    ${Math.round(5 / 0.15)};
`;

const moveAnimation = (numbers: number[]) => keyframes`
  ${numbers.map(
    (value, key) => `${key * 20}% {
      transform: translate(${value}px);
    }`
  )};
`;

function generateLetters(text: string) {
  const letters = text.split('');

  return letters.map((letter, key) => {
    const randomValues = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 3)
    );

    return (
      <Letter moveAnimation={moveAnimation(randomValues)} key={`letter_${key}`}>
        {letter}
      </Letter>
    );
  });
}

interface INameProps {
  first: string;
  last: string;
}

const Name: React.SFC<INameProps> = ({ first, last }) => (
  <NameWrapper>
    <div>{generateLetters(first)}</div>
    <div>{generateLetters(last)}</div>
  </NameWrapper>
);

export default Name;
