import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import useRandomImages from '../hooks/useRandomImages';

const IMAGE_SIZE_SQUARE_ROOT = 64;
const AMOUNT_OF_IMAGES = 3;

const colors = Array.from({ length: AMOUNT_OF_IMAGES }).map(
  _ =>
    `#${Math.random()
      .toString(16)
      .slice(2, 8)}`
);

function useWindowDimensions() {
  const currentDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>(currentDimensions());

  useEffect(() => {
    const handleResize = () => setDimensions(currentDimensions());
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return dimensions;
}

const Container = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const ExtraWideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: calc(100vw + ${IMAGE_SIZE_SQUARE_ROOT}px);
  filter: hue-rotate(90deg) contrast(200%) brightness(150%);
`;

const Row = styled.div`
  display: flex;

  img {
    width: ${IMAGE_SIZE_SQUARE_ROOT}px;
    height: ${IMAGE_SIZE_SQUARE_ROOT}px;
    background-size: cover;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    pointer-events: none;
  }
`;

const Tile = styled.img<{ bgColor: string }>`
  background-color: ${props => props.bgColor};
`;

function Background() {
  const { width, height } = useWindowDimensions();
  const [images] = useRandomImages() as [string[]];

  const isSSR = navigator.userAgent === 'ReactSnap';

  const amountOfItemsPerRow = Math.ceil(width / IMAGE_SIZE_SQUARE_ROOT);
  const amountOfItemsPerCol = isSSR
    ? 0
    : Math.ceil(height / IMAGE_SIZE_SQUARE_ROOT);

  return (
    <Container>
      <ExtraWideContainer>
        {Array.from({ length: amountOfItemsPerCol }).map((_, row) => (
          <Row key={`row_${row}`}>
            {Array.from({ length: amountOfItemsPerRow }).map((_, n) => (
              <Tile
                key={`image_${n}`}
                bgColor={colors[(row + n) % colors.length]}
                src={images[(row + n) % images.length]}
              />
            ))}
          </Row>
        ))}
      </ExtraWideContainer>
    </Container>
  );
}

export default Background;
