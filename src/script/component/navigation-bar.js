// eslint-disable-next-line require-jsdoc
class NavigationBar extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickTopRated(event) {
    this._clickTopRated = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickPopular(event) {
    this._clickPopular = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickNowPlaying(event) {
    this._clickNowPlaying = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  get value() {
    return this.querySelector('#searchElement').value;
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML =
      `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Viga&display=swap');

        .navbar-brand {
          font-family: 'Viga', sans-serif;
          font-size: 65px;
          color: white !important;
        }

        #li-item:hover {
          opacity: 0.3;
        }

        @media screen and (max-width: 992px){
          .navbar-brand {
            font-size: 55px;
          }
        }

        @media screen and (max-width: 576px){
          .navbar-brand {
            font-size: 40px;
          }
        }

        @media screen and (max-width: 315px){
          .navbar-brand {
            font-size: 30px;
          }
        }
      </style>

      <nav class="container navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="">Referenflix</a>
          <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" id="li-item">
                <a class="nav-link active text-white" id="top-rated" aria-current="page" href="#TopRated">Top Rated</a>
              </li>
              <li class="nav-item" id="li-item">
                <a class="nav-link active text-white" id="popular" aria-current="page" href="#Popular">Popular</a>
              </li>
              <li class="nav-item" id="li-item">
                <a class="nav-link active text-white" id="now-playing" aria-current="page" href="#NowPlaying">Now Playing</a>
              </li>
            </ul>

            <div class="d-flex">
              <input class="form-control me-2" placeholder="Search..." id="searchElement" type="search">
              <button class="btn btn-outline-success" id="searchButtonElement" type="submit">Search</button>
            </div>
          </div>
        </div>
      </nav>
      `;

    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    this.querySelector('#top-rated').addEventListener('click', this._clickTopRated);
    this.querySelector('#popular').addEventListener('click', this._clickPopular);
    this.querySelector('#now-playing').addEventListener('click', this._clickNowPlaying);
  }
}

customElements.define('navigation-bar', NavigationBar);
