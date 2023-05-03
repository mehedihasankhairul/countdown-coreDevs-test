import { useLayoutEffect, useState } from 'react';

import getRandomBg from '../helpers/getRandomBg';

const DELAY = 7000;

export default function Slider() {
  const [slide, setSlide] = useState(getRandomBg);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      const randomBg = getRandomBg();
      setSlide(randomBg)
    }, DELAY);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return (
    <div className="simpleslide">
      <div className="simpleslide-item bg-img1" style={{ backgroundImage: `url(${slide})`, animation: 'fadeIn 7s infinite' }}></div>
    </div>
  );
}