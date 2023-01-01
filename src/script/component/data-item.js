// eslint-disable-next-line require-jsdoc
class DataItem extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  set data(listFilm) {
    this._data = listFilm[0];
    this.link = listFilm[1];
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.className = 'col-lg-3 col-md-4 col-sm-6 col-xs-12';
    this.style = 'margin-bottom: 50px;';
    this.innerHTML =
    `
      <style>
        #card-film {
          border-radius: 13px;
        }

        #original-title {
          text-align: center; 
          margin: 10px 0px 10px 0px; 
          font-weight: bolder;
        }

        #data-overview {
          font-size: 15px; 
          margin: 0px 0px 20px 0px; 
          text-align: justify;
        }

        #card-film:hover {
          opacity: 0.7;
        }

        #see-more {
          transition: transform .15s;
        }

        #see-more:hover {
          transform: scale(1.3);
        }
      </style>

      <div class="box bg-dark h-100 d-flex p-4 flex-column text-white" id="card-film">
        <img src="http://image.tmdb.org/t/p/w185/${this._data.poster_path}" alt="${this._data.original_title}">
        <div class="card-body">
          <h4 class="card-title" id="original-title">${this._data.original_title}</h4>
          <p class="card-text" id="data-overview">${this._data.overview}</p>
        </div>
        <a href="https://www.imdb.com/title/${this.link}/" class="btn mt-auto btn-light" id="button-see-more">
          <div id="see-more" onclick="window.location='https://www.imdb.com/title/${this.link}/';">See More</div>
        </a>
      </div>
    </div>
  `;
  }
}

customElements.define('data-item', DataItem);
