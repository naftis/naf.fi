import { useState, useEffect } from 'react';

const IMAGE_SIZE_SQUARE_ROOT = 64;
const imageSizeSmaller = Math.floor(IMAGE_SIZE_SQUARE_ROOT / 2 / 2 / 2);
const RANDOM_SOURCES = [
  `https://picsum.photos/${imageSizeSmaller}`,
  `https://source.unsplash.com/random/${imageSizeSmaller}x${imageSizeSmaller}`
];
const AMOUNT_OF_IMAGES = 3;

const currentTimestamp = Number(new Date());

function useRandomImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const newImages = [...Array(AMOUNT_OF_IMAGES)].map(
      (_, n) =>
        `${
          RANDOM_SOURCES[n % RANDOM_SOURCES.length]
        }?r=${currentTimestamp}_${n}`
    );

    setImages(newImages);
  }, []);

  return [images, setImages];
}

export default useRandomImages;
