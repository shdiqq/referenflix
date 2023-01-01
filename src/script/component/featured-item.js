// eslint-disable-next-line require-jsdoc
class FeaturedItem extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  set feature(feature) {
    this._feature = feature;
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  get value() {
    return this.querySelector('#Fitur').textContent;
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = '';

    const dataDiv = document.createElement('div');
    dataDiv.className = 'container';
    dataDiv.style.width = '100%';
    dataDiv.style.lineHeight = '20px';
    dataDiv.style.marginTop = '15px';

    const dataH1 = document.createElement('h1');
    dataH1.id = 'Fitur';
    dataH1.style.borderLeft = 'solid 3px #e50914';
    dataH1.style.fontSize = '25px';
    dataH1.style.color = 'rgb(211, 211, 211)';
    dataH1.style.paddingLeft = '10px';
    dataH1.innerHTML = this._feature;

    dataDiv.appendChild(dataH1);
    this.appendChild(dataDiv);
  }
}

customElements.define('featured-item', FeaturedItem);
