import './data-item.js';
// eslint-disable-next-line require-jsdoc
class DataList extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  set films(listFilms) {
    this._films = listFilms[0];
    this.listID = listFilms[1];
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = '';
    this.className = 'd-flex justify-content-center align-items-center h-100 min-vh-100';

    const dataDiv = document.createElement('div');
    dataDiv.className = 'container';

    const dataDiv2 = document.createElement('div');
    dataDiv2.className = 'row gy-3 my-3';

    let i = 0;
    this._films.forEach( (film) => {
      if (film.backdrop_path != null && film.overview != '' && film.vote_average != 0 && this.listID[i] != '') {
        const dataItemElement = document.createElement('data-item');
        const listFilm = [];
        listFilm.push(film);
        listFilm.push(this.listID[i]);
        dataItemElement.data = listFilm;
        dataDiv2.appendChild(dataItemElement);
      }
      i++;
    });

    dataDiv.appendChild(dataDiv2);
    this.appendChild(dataDiv);
  }

  // eslint-disable-next-line require-jsdoc
  renderError(message) {
    this.innerHTML = '';
    this.className = '';
    this.innerHTML +=
    `
      <style>
        .errorSearch {
          color: white !important;
        }
      </style>
      
      <div class="container d-flex justify-content-center align-items-center h-50 min-vh-100">
        <h2 class="errorSearch">${message}</h2>
      </div>
    `;
  }
}

customElements.define('data-list', DataList);
