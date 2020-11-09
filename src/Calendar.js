import React, { useEffect, useState, useRef } from 'react';
import './Calendar.css';
import FilmInfo from './FilmInfo';
import AdventBackgrounds from './AdventBackgrounds';
import './FilmInfo.css';

const Calendar = () => {
  const [modalLoaded, setModalLoaded] = useState(false);
  const [specialDay, setSpecialDay] = useState(0);
  const [daysOpened, setDaysOpened] = useState(
    localStorage.length
      ? localStorage.getItem('daysOpened')
      : [0, 1, 2, 3, 4, 5, 6, 7] //TEST VALUES - SHOULD BE []
  );

  const daysRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const alreadySet = daysRef.current;

    if (alreadySet === null) {
      daysOpened.forEach((day) => {
        document.getElementById(day + 1).classList.add('opened');
      });
      AdventBackgrounds();
      daysRef.current = daysOpened;
    }
  }, [daysOpened]);

  const btnClickHandler = (day) => {
    setDaysOpened((prevState) => [...prevState, day]);
    AdventBackgrounds(day);

    // localStorageHandler();  UNCOMMENT THIS WHEN DONE TESTING "OPENED" STATE
    if (day === 23 || day === 24) {
      setSpecialDay(day);
    }

    document.getElementById('overlay').classList.toggle('closed');
    document.getElementById('modal').classList.toggle('closed');
  };

  // const localStorageHandler = () => {
  //   localStorage.setItem('daysOpened', daysOpened);
  // }; UNCOMMENT THIS WHEN DONE TESTING "OPENED" STATE

  const exitModalHandler = () => {
    document.getElementById('overlay').classList.toggle('closed');
    document.getElementById('modal').classList.add('fadeOut');
    setModalLoaded(false);
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
          specialDay={specialDay}
        />
      </div>
      <ol>
        <li id="btn1">
          <button
            id="1"
            className="xmas-btn"
            onClick={() => btnClickHandler(0)}
          >
            1
          </button>
        </li>
        <li id="btn2">
          <button
            id="2"
            className="xmas-btn"
            onClick={() => btnClickHandler(1)}
          >
            2
          </button>
        </li>
        <li id="btn3">
          <button
            id="3"
            className="xmas-btn"
            onClick={() => btnClickHandler(2)}
          >
            3
          </button>
        </li>
        <li id="btn4">
          <button
            id="4"
            className="xmas-btn"
            onClick={() => btnClickHandler(3)}
          >
            4
          </button>
        </li>
        <li id="btn5">
          <button
            id="5"
            className="xmas-btn"
            onClick={() => btnClickHandler(4)}
          >
            5
          </button>
        </li>
        <li id="btn6">
          <button
            id="6"
            className="xmas-btn"
            onClick={() => btnClickHandler(5)}
          >
            6
          </button>
        </li>
        <li id="btn7">
          <button
            id="7"
            className="xmas-btn"
            onClick={() => btnClickHandler(6)}
          >
            7
          </button>
        </li>
        <li id="btn8">
          <button
            id="8"
            className="xmas-btn"
            onClick={() => btnClickHandler(7)}
          >
            8
          </button>
        </li>
        <li id="btn9">
          <button
            id="9"
            className="xmas-btn"
            onClick={() => btnClickHandler(8)}
          >
            9
          </button>
        </li>
        <li id="btn10">
          <button
            id="10"
            className="xmas-btn"
            onClick={() => btnClickHandler(9)}
          >
            10
          </button>
        </li>
        <li id="btn11">
          <button
            id="11"
            className="xmas-btn"
            onClick={() => btnClickHandler(10)}
          >
            11
          </button>
        </li>
        <li id="btn12">
          <button
            id="12"
            className="xmas-btn"
            onClick={() => btnClickHandler(11)}
          >
            12
          </button>
        </li>
        <li id="btn13">
          <button
            id="13"
            className="xmas-btn"
            onClick={() => btnClickHandler(12)}
          >
            13
          </button>
        </li>
        <li id="btn14">
          <button
            id="14"
            className="xmas-btn"
            onClick={() => btnClickHandler(13)}
          >
            14
          </button>
        </li>
        <li id="btn15">
          <button
            id="15"
            className="xmas-btn"
            onClick={() => btnClickHandler(14)}
          >
            15
          </button>
        </li>
        <li id="btn16">
          <button
            id="16"
            className="xmas-btn"
            onClick={() => btnClickHandler(15)}
          >
            16
          </button>
        </li>
        <li id="btn17">
          <button
            id="17"
            className="xmas-btn"
            onClick={() => btnClickHandler(16)}
          >
            17
          </button>
        </li>
        <li id="btn18">
          <button
            id="18"
            className="xmas-btn"
            onClick={() => btnClickHandler(17)}
          >
            18
          </button>
        </li>
        <li id="btn19">
          <button
            id="19"
            className="xmas-btn"
            onClick={() => btnClickHandler(18)}
          >
            19
          </button>
        </li>
        <li id="btn20">
          <button
            id="20"
            className="xmas-btn"
            onClick={() => btnClickHandler(19)}
          >
            20
          </button>
        </li>
        <li id="btn21">
          <button
            id="21"
            className="xmas-btn"
            onClick={() => btnClickHandler(20)}
          >
            21
          </button>
        </li>
        <li id="btn22">
          <button
            id="22"
            className="xmas-btn"
            onClick={() => btnClickHandler(21)}
          >
            22
          </button>
        </li>
        <li id="btn23">
          <button
            id="23"
            className="xmas-btn"
            onClick={() => btnClickHandler(22)}
          >
            23
          </button>
        </li>
        <li id="btn24">
          <button
            id="24"
            className="xmas-btn"
            onClick={() => btnClickHandler(23)}
          >
            24
          </button>
        </li>
        <li id="btn25">
          <button
            id="25"
            className="xmas-day-btn"
            onClick={() => btnClickHandler(24)}
          >
            25
          </button>
        </li>
      </ol>
    </>
  );
};

export default Calendar;
