// eslint-disable-next-line require-jsdoc
class FooterContent extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML =
      `
        <footer class="text-center text-lg-start text-white" style="background-color: #929fba;">
          <div class="container p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 mx-auto mt-3">
                  <h1 class="text-uppercase mb-4 font-weight-bolder">Referenflix</h1>
                  <p style="font-size: 13px;">Website yang memberikan rekomendasi film yang kamu suka!</p>
                </div>
                <hr class="w-100 clearfix d-lg-none" />
                <div class="col-lg-3 mx-auto mt-3">
                  <h5 class="text-uppercase mb-4 font-weight-bold">Recommendation</h5>
                  <p>COMING SOON!</p>
                </div>
                <hr class="w-100 clearfix d-lg-none" />
                <div class="col-lg-3 mx-auto mt-3">
                  <h5 class="text-uppercase mb-4 font-weight-bold">Contact</h5>
                  <p><i class="fas fa-home mr-3"></i> Jalan </p>
                  <p><i class="fas fa-envelope mr-3"></i> email@gmail.com </p>
                  <p><i class="fas fa-phone mr-3"></i> +6280123456788 </p>
                </div>
                <hr class="w-100 clearfix d-lg-none" />
                <div class="col-lg-2 mx-auto mt-3">
                  <h5 class="text-uppercase mb-4 font-weight-bold">Follow us</h5>
                  <a class="btn btn-primary m-1" style="background-color: #3b5998; width :42px; height :38px;" href="https://www.facebook.com/" role="button">
                    <i class="fab fa-facebook"></i>
                  </a>
                  <a class="btn btn-primary m-1" style="background-color: #55acee; width :42px; height :38px;" href="https://twitter.com/home" role="button">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a class="btn btn-primary m-1" style="background-color: #dd4b39; width :42px; height :38px;" href="https://www.google.com/" role="button">
                    <i class="fab fa-google"></i>
                  </a>
                  <a class="btn btn-primary m-1" style="background-color: #ac2bac; width :42px; height :38px;" href="https://www.instagram.com/" role="button">
                    <i class="fab fa-instagram"></i>
                  </a>
                  <a class="btn btn-primary m-1" style="background-color: #0082ca; width :42px; height :38px;" href="https://www.linkedin.com/" role="button">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a class="btn btn-primary m-1" style="background-color: #333333; width :42px; height :38px;" href="https://github.com/" role="button">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)"> © 2022 Copyright: Shadiq Harwiz </div>
        </footer>
      `;
  }
}

customElements.define('footer-content', FooterContent);
