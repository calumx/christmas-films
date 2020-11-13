import GetFilmFromList from './GetFilmFromList';
import './styles/FilmInfo.css';
import snowman from './assets/images/snowman.gif';
import xmasTree from './assets/images/xmas-tree.gif';
import { useEffect, useState } from 'react';

const FilmInfo = (props) => {
  const [filmInfoState, setFilmInfoState] = useState(null);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    setImgsLoaded(false);
    if (props.modalLoaded) {
      const { title, pic, description, pairings, watched } = GetFilmFromList(
        props.daySelected
      );

      setFilmInfoState({ title, pic, description, pairings, watched });

      let loadCount = 0;

      [snowman, pic, xmasTree].forEach((source, index) => {
        //make sure images are fully loaded before injecting into DOM
        let img = new Image();
        img.src = source;
        img.className = source === pic ? 'thumbnail-pic' : '';
        img.alt = source === pic ? 'Thumbnail for ' + title : 'Spinning GIF';
        img.onload = () => {
          document.querySelector('#toprow-' + index).appendChild(img);
          loadCount++;

          if (loadCount === 3) {
            requestAnimationFrame(() => setImgsLoaded(true));
          }
        };
      });
    } else return null;
  }, [props.modalLoaded, props.daySelected]);

  const exitModalClickHandler = () => {
    setFilmInfoState(null);
    props.exitModalHandler();
  };

  onkeydown = (key) => {
    if (key.key === 'Escape') {
      exitModalClickHandler();
    }
  };

  const ordinalSuffix = (day) => {
    if (day === (1 || 21)) {
      return 'st';
    } else {
      if (day === (2 || 22)) {
        return 'nd';
      } else {
        if (day === (3 || 23)) {
          return 'rd';
        } else return 'th';
      }
    }
  };

  if (props.modalLoaded && filmInfoState) {
    return (
      <>
        <div
          className="info-container"
          style={{ animation: imgsLoaded ? 'fadeIn 1s ease forwards' : '' }}
        >
          <div className="top-row-images">
            <div id="toprow-0"></div>
            <div id="toprow-1"></div>
            <div id="toprow-2"></div>
          </div>

          <h1>{filmInfoState.title}</h1>
          {filmInfoState.watched ? (
            <p>
              You watched <i>{filmInfoState.title}</i> on{' '}
              {props.daySelected + ordinalSuffix(props.daySelected)} December.
              Hope you enjoyed!
            </p>
          ) : (
            <>
              {' '}
              <p>{filmInfoState.description}</p>
              <h2>Goes well with...</h2>
              <p className="pairings">{filmInfoState.pairings}</p>
            </>
          )}
          <button
            className="xmas-btn-confirm"
            onClick={() => exitModalClickHandler()}
            autoFocus
          >
            OK{filmInfoState.watched ? null : ", let's watch!"}
          </button>
          {/* snowflakes by Pavel Ševčík @ github.com/pajasevi */}
          <div className="snowflakes" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❄</div>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default FilmInfo;
