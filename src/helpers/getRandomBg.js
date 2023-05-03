// Images
import bg01 from '../assets/images/bg01.jpg';
import bg02 from '../assets/images/bg02.jpg';
import bg03 from '../assets/images/bg03.jpg';

let index = 0;
const slides = [bg01, bg02, bg03];

const getRandomBg = () => {
  if (index >= slides.length) index = 0;
  return slides[index++]
}

export default getRandomBg;