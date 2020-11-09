import GetFilmFromList from './GetFilmFromList';
import './FilmInfo.css';
import snowman from './assets/images/snowman.gif';
import xmasTree from './assets/images/xmas-tree.gif';
import { useEffect, useState } from 'react';

const FilmInfo = (props) => {
  const [filmInfo, setFilmInfo] = useState({
    title: '',
    pic: '',
    description: '',
    pairings: '',
  });

  useEffect(() => {
    if (props.modalLoaded) {
      const { title, pic, description, pairings } = GetFilmFromList(0);
      setFilmInfo({ title, pic, description, pairings });
    } else return;
  }, [props.modalLoaded]);

  const exitModalClickHandler = () => {
    props.exitModalHandler();
  };

  if (props.modalLoaded) {
    return (
      <div className="info-container">
        <div className="top-row-images">
          <img src={snowman} alt="A spinning snowman" />
          <img
            src={filmInfo.pic}
            alt={'thumbnail for '}
            className="thumbnail-pic"
          />
          <img src={xmasTree} alt="A spinning Christmas tree" />
        </div>
        <h1>{filmInfo.title}</h1>
        <p>{filmInfo.description}</p>
        <h2>Goes well with...</h2>
        <p className="pairings">{filmInfo.pairings}</p>
        <button
          className="xmas-btn-confirm"
          onClick={() => exitModalClickHandler()}
        >
          OK, let's watch!
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
