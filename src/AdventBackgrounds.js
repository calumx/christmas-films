import one from './assets/images/advent-bgs/1.jpg';
import two from './assets/images/advent-bgs/2.jpg';
import three from './assets/images/advent-bgs/3.jpg';
import four from './assets/images/advent-bgs/4.jpg';
import five from './assets/images/advent-bgs/5.jpg';
import six from './assets/images/advent-bgs/6.jpg';
import seven from './assets/images/advent-bgs/7.jpg';
import eight from './assets/images/advent-bgs/8.jpg';
import nine from './assets/images/advent-bgs/9.jpg';
import ten from './assets/images/advent-bgs/10.jpg';
import eleven from './assets/images/advent-bgs/11.jpg';
import twelve from './assets/images/advent-bgs/12.jpg';
import thirteen from './assets/images/advent-bgs/13.jpg';
import fourteen from './assets/images/advent-bgs/14.jpg';
import fifteen from './assets/images/advent-bgs/15.jpg';
import sixteen from './assets/images/advent-bgs/16.jpg';
import seventeen from './assets/images/advent-bgs/17.jpg';
import eighteen from './assets/images/advent-bgs/18.jpg';
import nineteen from './assets/images/advent-bgs/19.jpg';
import twenty from './assets/images/advent-bgs/20.jpg';
import twentyone from './assets/images/advent-bgs/21.jpg';
import twentytwo from './assets/images/advent-bgs/22.jpg';
import twentythree from './assets/images/advent-bgs/23.jpg';
import twentyfour from './assets/images/advent-bgs/24.jpg';

const srcImgs = [
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
const imgsInUse = [];

const AdventBackgrounds = (props) => {
  if (props === 24) {
    return;
  } else if (props) {
    let randomIndex = Math.floor(Math.random() * srcImgs.length);
    let btn = document.getElementById(props + 1);
    imgsInUse.unshift(...srcImgs.splice(randomIndex, 1));

    btn.style.setProperty(
      'background',
      'url(' + imgsInUse[0] + ') 50% 50% / cover no-repeat'
    );

    return (btn.innerHTML = '');
  } else {
    const btnsOpened = [...document.getElementsByClassName('opened')];

    return btnsOpened.forEach((btn) => {
      let randomIndex = Math.floor(Math.random() * srcImgs.length);
      imgsInUse.unshift(...srcImgs.splice(randomIndex, 1));

      btn.style.setProperty(
        'background',
        'url(' + imgsInUse[0] + ') 50% 50% / cover no-repeat'
      );

      btn.innerHTML = '';
      let img = new Image();
      img.src = imgsInUse[0];
      img.onload = () => console.log('loaded');
    });
  }
};
export default AdventBackgrounds;
