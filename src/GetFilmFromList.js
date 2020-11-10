import CompleteFilmList from './CompleteFilmList';

let filmsRecommended =
  localStorage.getItem('filmsRecommended') !== null
    ? JSON.parse(localStorage.getItem('filmsRecommended'))
    : [];

let filmList =
  localStorage.getItem('filmList') !== null
    ? JSON.parse(localStorage.getItem('filmList'))
    : CompleteFilmList;

const GetFilmFromList = (props) => {
  if (props <= filmsRecommended.length) {
    return {
      ...filmsRecommended[filmsRecommended.length - props],
      ...{ watched: true },
    };
  } else if (props < 24) {
    let randomIndex = Math.floor(Math.random() * (filmList.length - 2));

    filmsRecommended.unshift(...filmList.splice(randomIndex, 1));

    localStorage.setItem('filmsRecommended', JSON.stringify(filmsRecommended));
    localStorage.setItem('filmList', JSON.stringify(filmList));

    return filmsRecommended[0];
  } else if (props === 24) {
    filmsRecommended.unshift(...filmList.splice(0, 1));

    localStorage.setItem('filmsRecommended', JSON.stringify(filmsRecommended));
    localStorage.setItem('filmList', JSON.stringify(filmList));
    return filmsRecommended[0];
  } else if (props === 25) {
    filmsRecommended.unshift(...filmList.splice(0, 1));

    localStorage.setItem('filmsRecommended', JSON.stringify(filmsRecommended));
    localStorage.setItem('filmList', JSON.stringify(filmList));
    return filmsRecommended[0];
  }
};

export default GetFilmFromList;
