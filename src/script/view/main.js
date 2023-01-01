import '../component/data-list.js';
import '../component/navigation-bar.js';
import '../component/featured-item.js';
import '../component/footer-content.js';
import '../component/pagination-content.js';

import DataSource from '../data/data-source.js';

const main = () => {
  const navigationElement = document.querySelector('navigation-bar');
  const dataListElement = document.querySelector('data-list');
  const featuredElement = document.querySelector('featured-item');
  const paginationElement = document.querySelector('pagination-content');

  const onPrevButtonPageClicked = () => {
    const value = parseInt(paginationElement.valuePrev) - 1;

    onButtonPageClicked(value);
  };

  const onNextButtonPageClicked = () => {
    const value = parseInt(paginationElement.valuePrev) + 1;

    onButtonPageClicked(value);
  };

  const onButtonSearchClicked = () => {
    processGetDataSource(1, navigationElement.value, 'Movie result found: ');
  };

  const onTopRatedClicked = () => {
    processGetDataSource(1, '', 'TOP RATED MOVIES');
  };

  const onPopularClicked = () => {
    processGetDataSource(1, '', 'POPULAR MOVIES');
  };

  const onNowPlaying = () => {
    processGetDataSource(1, '', 'NOW PLAYING MOVIES');
  };

  const onButtonPageClicked = (value) => {
    if ( featuredElement.value == 'TRENDING MOVIES' ) {
      processGetDataSource(value, '', featuredElement.value);
    } else if ( featuredElement.value == 'TOP RATED MOVIES' ) {
      processGetDataSource(value, '', featuredElement.value);
    } else if ( featuredElement.value == 'POPULAR MOVIES' ) {
      processGetDataSource(value, '', featuredElement.value);
    } else if ( featuredElement.value == 'NOW PLAYING MOVIES' ) {
      processGetDataSource(value, '', featuredElement.value);
    } else {
      processGetDataSource(value, navigationElement.value, 'Movie result found: ');
    }
  };

  const processGetDataSource = async (numPage, inputSearch, category) => {
    try {
      const listResult = [];
      const listIMDBID = [];
      const listPagination = [];
      let result;

      if ( category == 'TRENDING MOVIES' ) {
        result = await DataSource.getTrending(numPage);
      } else if ( category == 'TOP RATED MOVIES' ) {
        result = await DataSource.getTopRated(numPage);
      } else if ( category == 'POPULAR MOVIES') {
        result = await DataSource.getPopular(numPage);
      } else if ( category == 'NOW PLAYING MOVIES') {
        result = await DataSource.getNowPlaying(numPage);
      } else if ( category == 'Movie result found: ') {
        result = await DataSource.getSearchFilm(numPage, inputSearch);
      }

      listResult.push(result[0]);
      listPagination.push(result[2]);
      listPagination.push(result[3]);

      try {
        for await (const element of result[1]) {
          const imdbID = await DataSource.getListLink(element);
          listIMDBID.push(imdbID);
        }
        listResult.push(listIMDBID);
        if ( inputSearch !== '' ) {
          renderResult(listResult, listPagination, `${category}${inputSearch}`);
        } else {
          renderResult(listResult, listPagination, `${category}`);
        }
      } catch (error) {
        console.log(error);
      }
    } catch (message) {
      if ( inputSearch !== '' ) {
        fallbackResult(message, `${category}${inputSearch}`);
      } else {
        fallbackResult(message, `${category}`);
      }
    }
  };

  const renderResult = (listResult, listPagination, fitur) => {
    dataListElement.films = listResult;
    paginationElement.listPagination = listPagination;
    featuredElement.feature = fitur;
  };

  const fallbackResult = (message, fitur) => {
    featuredElement.feature = fitur;
    dataListElement.renderError(message);
    paginationElement.renderError();
  };

  navigationElement.clickEvent = onButtonSearchClicked;
  navigationElement.clickTopRated = onTopRatedClicked;
  navigationElement.clickPopular = onPopularClicked;
  navigationElement.clickNowPlaying = onNowPlaying;

  paginationElement.clickPrev = onPrevButtonPageClicked;
  paginationElement.clickNext = onNextButtonPageClicked;

  processGetDataSource(1, '', 'TRENDING MOVIES');
};

export default main;
