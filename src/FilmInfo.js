import GetFilmFromList from './GetFilmFromList';
import './FilmInfo.css';
import snowman from './assets/images/snowman.gif';
import xmasTree from './assets/images/xmas-tree.gif';
import { useEffect, useState } from 'react';

const FilmInfo = (props) => {
  const [filmInfoState, setFilmInfoState] = useState(null);
  const [imgLoaded, setImgLoaded] = useState(0);

  useEffect(() => {
    if (props.modalLoaded) {
      const { title, pic, description, pairings, watched } = GetFilmFromList(
        props.daySelected
      );

      setFilmInfoState({ title, pic, description, pairings, watched });
    } else return null;
  }, [props.modalLoaded, props.daySelected]);

  const exitModalClickHandler = () => {
    setFilmInfoState(null);
    props.exitModalHandler();
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
      <div
        className="info-container"
        style={{ opacity: imgLoaded === 3 ? 1 : 0 }}
      >
        <div className="top-row-images">
          <img src={snowman} alt="A spinning snowman" />
          <img
            src={filmInfoState.pic}
            alt={'thumbnail for ' + filmInfoState.title}
            className="thumbnail-pic"
          />
          <img src={xmasTree} alt="A spinning Christmas tree" />
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
    );
  } else return null;
};

export default FilmInfo;
