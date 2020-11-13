import one from './assets/images/advent-bgs/1.webp'; //LARGE COLLAPSED LINES OF IMPORTS
import two from './assets/images/advent-bgs/2.webp';
import three from './assets/images/advent-bgs/3.webp';
import four from './assets/images/advent-bgs/4.webp';
import five from './assets/images/advent-bgs/5.webp';
import six from './assets/images/advent-bgs/6.webp';
import seven from './assets/images/advent-bgs/7.webp';
import eight from './assets/images/advent-bgs/8.webp';
import nine from './assets/images/advent-bgs/9.webp';
import ten from './assets/images/advent-bgs/10.webp';
import eleven from './assets/images/advent-bgs/11.webp';
import twelve from './assets/images/advent-bgs/12.webp';
import thirteen from './assets/images/advent-bgs/13.webp';
import fourteen from './assets/images/advent-bgs/14.webp';
import fifteen from './assets/images/advent-bgs/15.webp';
import sixteen from './assets/images/advent-bgs/16.webp';
import seventeen from './assets/images/advent-bgs/17.webp';
import eighteen from './assets/images/advent-bgs/18.webp';
import nineteen from './assets/images/advent-bgs/19.webp';
import twenty from './assets/images/advent-bgs/20.webp';
import twentyone from './assets/images/advent-bgs/21.webp';
import twentytwo from './assets/images/advent-bgs/22.webp';
import twentythree from './assets/images/advent-bgs/23.webp';
import twentyfour from './assets/images/advent-bgs/24.webp';
//ARRAY OF PRELOAD IMAGES

let srcImgs =
  localStorage.getItem('srcImgs') !== null
    ? JSON.parse(localStorage.getItem('srcImgs'))
    : [
        one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        thirteen,
        fourteen,
        fifteen,
        sixteen,
        seventeen,
        eighteen,
        nineteen,
        twenty,
        twentyone,
        twentytwo,
        twentythree,
        twentyfour,
      ];

let imgsInUse =
  localStorage.getItem('imgsInUse') !== null
    ? JSON.parse(localStorage.getItem('imgsInUse'))
    : [];

const AdventBackgrounds = (props) => {
  if (props === 25) {
    return null;
  } else if (typeof props === 'number') {
    //if user has clicked new button
    let btn = document.getElementById(props);

    let randomIndex = Math.floor(Math.random() * srcImgs.length);
    imgsInUse.unshift(...srcImgs.splice(randomIndex, 1));

    btn.style.setProperty(
      'background',
      'rgba(0, 0, 0, 0.2) url(' + imgsInUse[0] + ') 50% 50% / cover no-repeat'
    );

    btn.style.setProperty('background-blend-mode', 'multiply');

    localStorage.setItem('srcImgs', JSON.stringify(srcImgs));
    localStorage.setItem('imgsInUse', JSON.stringify(imgsInUse));

    return (btn.innerHTML = '');
  } else {
    //page is opened for first time
    const btnsOpened = [...document.getElementsByClassName('opened')];

    return btnsOpened.forEach((btn) => {
      let loader = new Image();
      loader.src = imgsInUse[imgsInUse.length - btn.id];
      loader.onload = () => {
        requestAnimationFrame(props);
      };

      btn.style.setProperty(
        'background',
        'rgba(0, 0, 0, 0.2) url(' +
          imgsInUse[imgsInUse.length - btn.id] +
          ') 50% 50% / cover no-repeat'
      );

      btn.innerHTML = '';

      btn.style.setProperty('background-blend-mode', 'multiply');
    });
  }
};
export default AdventBackgrounds;
