// eslint-disable-next-line require-jsdoc
class PaginationContent extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  set listPagination(listPage) {
    this.totalPage = listPage[0];
    this.page = listPage[1];
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickPrev(event) {
    this._clickPrev = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  set clickNext(event) {
    this._clickNext = event;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  get valuePrev() {
    return this.querySelector('#pageButtonElement').getAttribute('number-page');
  }

  // eslint-disable-next-line require-jsdoc
  get valueNext() {
    return this.querySelector('#pageButtonElement').getAttribute('number-page');
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = '';
    let i = 0;

    const dataDiv = document.createElement('div');
    dataDiv.className = 'container';

    const dataUl = document.createElement('ul');
    dataUl.className = 'pagination justify-content';

    let dataLi = document.createElement('li');
    if ( this.page == 1 ) {
      dataLi.className = 'page-item disabled';

      const dataSpan = document.createElement('span');
      dataSpan.className = 'page-link';
      dataSpan.innerHTML = 'Previous';

      dataLi.appendChild(dataSpan);
    } else {
      dataLi.className = 'page-item';

      const dataA = document.createElement('a');
      dataA.className = 'page-link';
      dataA.id = `previousButtonElement`;
      dataA.setAttribute('href', '#');
      dataA.innerHTML = 'Previous';

      dataLi.appendChild(dataA);
    }
    dataUl.appendChild(dataLi);

    if ( this.totalPage - this.page < 4 ) {
      if ( 4 - this.page == 3 ) {
        i = this.page;
      } else if (4 - this.page == 2 ) {
        i = this.page - 1;
      } else if (4 - this.page == 1 ) {
        i = this.page - 2;
      } else if (4 - this.page == 0 ) {
        i = this.page - 3;
      }
      for ( i; i <= (this.totalPage); i++ ) {
        dataLi = document.createElement('li');
        if ( i == this.page ) {
          dataLi.className = 'page-item active';
          dataLi.id = `pageButtonElement`;
          dataLi.setAttribute('number-page', (i).toString());
        } else {
          dataLi.className = 'page-item disabled';
        }
        const dataSpan = document.createElement('span');
        dataSpan.className = 'page-link';
        dataSpan.innerHTML = i;

        dataLi.appendChild(dataSpan);
        dataUl.appendChild(dataLi);
      }
    } else {
      i = this.page;
      for ( i; i <= (this.page + 2 - 1); i++ ) {
        dataLi = document.createElement('li');
        if ( i == this.page ) {
          dataLi.className = 'page-item active';
          dataLi.id = `pageButtonElement`;
          dataLi.setAttribute('number-page', (i).toString());
        } else {
          dataLi.className = 'page-item disabled';
        }
        const dataSpan = document.createElement('span');
        dataSpan.className = 'page-link';
        dataSpan.innerHTML = i;

        dataLi.appendChild(dataSpan);
        dataUl.appendChild(dataLi);
      }

      if ( this.page < this.totalPage - 2 ) {
        dataLi = document.createElement('li');
        dataLi.className = 'page-item disabled';
        const dataSpan = document.createElement('span');
        dataSpan.className = 'page-link';
        dataSpan.innerHTML = '...';

        dataLi.appendChild(dataSpan);
        dataUl.appendChild(dataLi);

        i = this.totalPage - 1;
        for ( i; i <= this.totalPage; i++ ) {
          dataLi = document.createElement('li');
          if ( i == this.page ) {
            dataLi.className = 'page-item active';
            dataLi.id = `pageButtonElement`;
            dataLi.setAttribute('number-page', (i).toString());
          } else {
            dataLi.className = 'page-item disabled';
          }
          const dataSpan = document.createElement('a');
          dataSpan.className = 'page-link';
          dataSpan.innerHTML = i;
          dataLi.appendChild(dataSpan);
          dataUl.appendChild(dataLi);
        }
      }
    }
    dataLi = document.createElement('li');
    if ( this.page == this.totalPage ) {
      dataLi.className = 'page-item disabled';

      const dataSpan = document.createElement('span');
      dataSpan.className = 'page-link';
      dataSpan.innerHTML = 'Next';

      dataLi.appendChild(dataSpan);
    } else {
      dataLi.className = 'page-item';

      const dataA = document.createElement('a');
      dataA.className = 'page-link';
      dataA.id = `nextButtonElement`;
      dataA.setAttribute('href', '#');
      dataA.innerHTML = 'Next';

      dataLi.appendChild(dataA);
    }
    dataUl.appendChild(dataLi);
    dataDiv.appendChild(dataUl);
    this.appendChild(dataDiv);

    if (this.querySelector('#nextButtonElement')) {
      this.querySelector('#nextButtonElement').addEventListener('click', this._clickNext);
    }

    if (this.querySelector('#previousButtonElement')) {
      this.querySelector('#previousButtonElement').addEventListener('click', this._clickPrev);
    }
  }

  // eslint-disable-next-line require-jsdoc
  renderError() {
    this.innerHTML = '';
  }
}

customElements.define('pagination-content', PaginationContent);
