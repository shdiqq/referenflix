import axios from 'axios';

// eslint-disable-next-line require-jsdoc
class DataSource {
  // eslint-disable-next-line require-jsdoc
  static getSearchFilm(numPage, inputSearch) {
    const inputSearchString = inputSearch.toString();

    if (inputSearchString !== '') {
      return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0ce0303066eb3aa3b10b9655c8357fa8&query=${inputSearchString}&page=${numPage.toString()}`)
          .then(
              ({data}) => {
                if (data.results) {
                  const dataID = [];
                  data.results.forEach( (element) => {
                    dataID.push(element.id);
                  });
                  return Promise.resolve([data.results, dataID, data.total_pages, data.page]);
                } else {
                  return Promise.reject(new Error(`${searchKeyword} is not found`));
                }
              },
          );
    } else {
      return Promise.reject(new Error(`Please insert a film name!`));
    }
  }

  // eslint-disable-next-line require-jsdoc
  static getTopRated(numPage) {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0ce0303066eb3aa3b10b9655c8357fa8&language=en-US&page=${numPage.toString()}`)
        .then(
            ({data}) => {
              if (data.results) {
                const dataID = [];
                data.results.forEach( (element) => {
                  dataID.push(element.id);
                });
                return Promise.resolve([data.results, dataID, data.total_pages, data.page]);
              } else {
                return Promise.reject(new Error(`is not found`));
              }
            },
        );
  }

  // eslint-disable-next-line require-jsdoc
  static getPopular(numPage) {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0ce0303066eb3aa3b10b9655c8357fa8&language=en-US&page=${numPage.toString()}`)
        .then(
            ({data}) => {
              if (data.results) {
                const dataID = [];
                data.results.forEach( (element) => {
                  dataID.push(element.id);
                });
                return Promise.resolve([data.results, dataID, data.total_pages, data.page]);
              } else {
                return Promise.reject(new Error(`is not found`));
              }
            },
        );
  }

  // eslint-disable-next-line require-jsdoc
  static getNowPlaying(numPage) {
    return axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=0ce0303066eb3aa3b10b9655c8357fa8&language=en-US&page=${numPage.toString()}`)
        .then(
            ({data}) => {
              if (data.results) {
                const dataID = [];
                data.results.forEach( (element) => {
                  dataID.push(element.id);
                });
                return Promise.resolve([data.results, dataID, data.total_pages, data.page]);
              } else {
                return Promise.reject(new Error(`is not found`));
              }
            },
        );
  }

  // eslint-disable-next-line require-jsdoc
  static getTrending(numPage) {
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=0ce0303066eb3aa3b10b9655c8357fa8&page=${numPage.toString()}`)
        .then(
            ({data}) => {
              if (data.results) {
                const dataID = [];
                data.results.forEach( (element) => {
                  dataID.push(element.id);
                });
                return Promise.resolve([data.results, dataID, data.total_pages, data.page]);
              } else {
                return Promise.reject(new Error(`is not found`));
              }
            },
        );
  }

  // eslint-disable-next-line require-jsdoc
  static getListLink(element) {
    return axios.get(`https://api.themoviedb.org/3/movie/${element}?api_key=0ce0303066eb3aa3b10b9655c8357fa8&language=en-US`)
        .then(
            ({data}) => {
              return Promise.resolve(data.imdb_id);
            },
        );
  };
}

export default DataSource;
