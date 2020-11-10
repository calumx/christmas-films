import React, { useEffect, useState, useRef } from 'react';
import './Calendar.css';
import FilmInfo from './FilmInfo';
import AdventBackgrounds from './AdventBackgrounds';
import './FilmInfo.css';

const Calendar = () => {
  const [modalLoaded, setModalLoaded] = useState(false);
  const [daySelected, setDaySelected] = useState(0);

  const [daysOpened, setDaysOpened] = useState(
    localStorage.getItem('daysOpened') !== null
      ? localStorage.getItem('daysOpened').split(',')
      : []
  );

  const daysRef = useRef(null);

  useEffect(() => {
    const alreadySet = daysRef.current;

    if (alreadySet === null) {
      daysOpened.forEach((day) => {
        document.getElementById(day).classList.add('opened');
      });
      AdventBackgrounds();
      daysRef.current = daysOpened;
    } else localStorage.setItem('daysOpened', daysOpened);
  }, [daysOpened]);

  const btnClickHandler = (day) => {
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
      <ol>
        <li id="btn1">
          <button
            id="1"
            className="xmas-btn"
            onClick={() => btnClickHandler(1)}
          >
            1
          </button>
        </li>
        <li id="btn2">
          <button
            id="2"
            className="xmas-btn"
            onClick={() => btnClickHandler(2)}
          >
            2
          </button>
        </li>
        <li id="btn3">
          <button
            id="3"
            className="xmas-btn"
            onClick={() => btnClickHandler(3)}
          >
            3
          </button>
        </li>
        <li id="btn4">
          <button
            id="4"
            className="xmas-btn"
            onClick={() => btnClickHandler(4)}
          >
            4
          </button>
        </li>
        <li id="btn5">
          <button
            id="5"
            className="xmas-btn"
            onClick={() => btnClickHandler(5)}
          >
            5
          </button>
        </li>
        <li id="btn6">
          <button
            id="6"
            className="xmas-btn"
            onClick={() => btnClickHandler(6)}
          >
            6
          </button>
        </li>
        <li id="btn7">
          <button
            id="7"
            className="xmas-btn"
            onClick={() => btnClickHandler(7)}
          >
            7
          </button>
        </li>
        <li id="btn8">
          <button
            id="8"
            className="xmas-btn"
            onClick={() => btnClickHandler(8)}
          >
            8
          </button>
        </li>
        <li id="btn9">
          <button
            id="9"
            className="xmas-btn"
            onClick={() => btnClickHandler(9)}
          >
            9
          </button>
        </li>
        <li id="btn10">
          <button
            id="10"
            className="xmas-btn"
            onClick={() => btnClickHandler(10)}
          >
            10
          </button>
        </li>
        <li id="btn11">
          <button
            id="11"
            className="xmas-btn"
            onClick={() => btnClickHandler(11)}
          >
            11
          </button>
        </li>
        <li id="btn12">
          <button
            id="12"
            className="xmas-btn"
            onClick={() => btnClickHandler(12)}
          >
            12
          </button>
        </li>
        <li id="btn13">
          <button
            id="13"
            className="xmas-btn"
            onClick={() => btnClickHandler(13)}
          >
            13
          </button>
        </li>
        <li id="btn14">
          <button
            id="14"
            className="xmas-btn"
            onClick={() => btnClickHandler(14)}
          >
            14
          </button>
        </li>
        <li id="btn15">
          <button
            id="15"
            className="xmas-btn"
            onClick={() => btnClickHandler(15)}
          >
            15
          </button>
        </li>
        <li id="btn16">
          <button
            id="16"
            className="xmas-btn"
            onClick={() => btnClickHandler(16)}
          >
            16
          </button>
        </li>
        <li id="btn17">
          <button
            id="17"
            className="xmas-btn"
            onClick={() => btnClickHandler(17)}
          >
            17
          </button>
        </li>
        <li id="btn18">
          <button
            id="18"
            className="xmas-btn"
            onClick={() => btnClickHandler(18)}
          >
            18
          </button>
        </li>
        <li id="btn19">
          <button
            id="19"
            className="xmas-btn"
            onClick={() => btnClickHandler(19)}
          >
            19
          </button>
        </li>
        <li id="btn20">
          <button
            id="20"
            className="xmas-btn"
            onClick={() => btnClickHandler(20)}
          >
            20
          </button>
        </li>
        <li id="btn21">
          <button
            id="21"
            className="xmas-btn"
            onClick={() => btnClickHandler(21)}
          >
            21
          </button>
        </li>
        <li id="btn22">
          <button
            id="22"
            className="xmas-btn"
            onClick={() => btnClickHandler(22)}
          >
            22
          </button>
        </li>
        <li id="btn23">
          <button
            id="23"
            className="xmas-btn"
            onClick={() => btnClickHandler(23)}
          >
            23
          </button>
        </li>
        <li id="btn24">
          <button
            id="24"
            className="xmas-btn"
            onClick={() => btnClickHandler(24)}
          >
            24
          </button>
        </li>
        <li id="btn25">
          <button
            id="25"
            className="xmas-day-btn"
            onClick={() => btnClickHandler(25)}
          >
            25
          </button>
        </li>
      </ol>
    </>
  );
};

export default Calendar;
