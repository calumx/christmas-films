import React, { useEffect, useState, useRef } from 'react';
import './styles/Calendar.css';
import FilmInfo from './FilmInfo';
import AdventBackgrounds from './AdventBackgrounds';
import BounceLoader from 'react-spinners/BounceLoader';

const Calendar = () => {
  const [pageFullyLoaded, setPageFullyLoaded] = useState(false);
  const [modalLoaded, setModalLoaded] = useState(false);
  const [daySelected, setDaySelected] = useState(0);

  const daysRef = useRef(false);

  const [daysOpened, setDaysOpened] = useState(
    localStorage.getItem('daysOpened') !== null
      ? localStorage.getItem('daysOpened').split(',')
      : []
  );

  useEffect(() => {
    const alreadySet = daysRef.current;
    if (daysOpened.length === 0) {
      setPageFullyLoaded(true);
    } else if (!alreadySet) {
      daysOpened.forEach((day) => {
        document.getElementById(day).classList.add('opened');
      });
      AdventBackgrounds(() => {
        setPageFullyLoaded(true);
      });
      daysRef.current = daysOpened;
    } else {
      localStorage.setItem('daysOpened', daysOpened);
    }
  }, [daysOpened]);

  const btnClickHandler = (day) => {
    // const day = +dayEvent.target.id;
    console.log(typeof day);
    if (!document.getElementById(day).classList.contains('opened')) {
      if (
        day > 1 && //this stuff will be replaced
        !document.getElementById(day - 1).classList.contains('opened') //by Date() code in December
      ) {
        return alert('Too early! Try a day which comes sooner.'); //it's just here to test during November.
      } else AdventBackgrounds(day);
      document.getElementById(day).classList.add('opened');
      setDaysOpened((prevState) => [...prevState, day]);
    }

    setDaySelected(day);

    document.getElementById('overlay').classList.toggle('closed');
    document.getElementById('modal').classList.toggle('closed');
  };

  const exitModalHandler = () => {
    document.getElementById('overlay').classList.toggle('closed');
    document.getElementById('modal').classList.add('fadeOut');
    setModalLoaded(false);
    setDaySelected(0);
  };

  const btnCreator = () => {
    let btn = 1;
    let btnArray = [];

    while (btn <= 25) {
      if (btn === 25) {
        btnArray.push(
          <li id={`btn${btn}`} key={`btn-${btn}`}>
            <button
              id={btn.toString()}
              className="xmas-day-btn"
              onClick={(e) => btnClickHandler(+e.target.id)}
            >
              {btn}
            </button>
          </li>
        );
      } else
        btnArray.push(
          <li id={`btn${btn}`} key={`btn-${btn}`}>
            <button
              id={btn.toString()}
              className="xmas-btn"
              onClick={(e) => btnClickHandler(+e.target.id)}
            >
              {btn}
            </button>
          </li>
        );
      btn++;
    }

    return btnArray;
  };

  return (
    <>
      <div className="overlay closed" id="overlay"></div>
      <div
        className="film-modal closed"
        id="modal"
        onAnimationEnd={(e) =>
          e.animationName === 'fadeOut'
            ? (document.getElementById('modal').classList.toggle('closed'),
              document.getElementById('modal').classList.remove('fadeOut'))
            : setModalLoaded(true)
        }
      >
        <FilmInfo
          modalLoaded={modalLoaded}
          exitModalHandler={() => exitModalHandler()}
          daySelected={daySelected}
        />
      </div>

      <div
        className="loading-screen"
        style={{
          animation: pageFullyLoaded ? 'fadeOut 1s ease forwards 1s' : '',
        }}
      >
        <BounceLoader color="rgba(187, 37, 40, 1)" size="200px" />
        Loading...
      </div>

      <ol
        style={{
          animation: pageFullyLoaded ? 'fadeIn 1s ease 1.5s forwards' : '',
        }}
      >
        {btnCreator()}
      </ol>
    </>
  );
};

export default Calendar;
