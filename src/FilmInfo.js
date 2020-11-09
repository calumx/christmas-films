import GetFilmFromList from './GetFilmFromList';
import './FilmInfo.css';
import snowman from './assets/images/snowman.gif';
import xmasTree from './assets/images/xmas-tree.gif';

const FilmInfo = (props) => {
  const film = props.specialDay
    ? GetFilmFromList(props.specialDay)
    : GetFilmFromList(0);
  const title = film.title;
  const pic = film.pic;
  const description = film.description;
  const pairings = film.pairings;

  const exitModalClickHandler = () => {
    props.exitModalHandler();
  };

  if (props.modalLoaded) {
    return (
      <div className="info-container">
        <div className="top-row-images">
          <img src={snowman} alt="A spinning snowman" />
          <img
            src={pic}
            alt={'thumbnail for ' + title}
            className="thumbnail-pic"
          />
          <img src={xmasTree} alt="A spinning Christmas tree" />
        </div>
        <h1>{title}</h1>
        <p>{description}</p>
        <h2>Goes well with...</h2>
        <p className="pairings">{pairings}</p>
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
