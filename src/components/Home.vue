<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="offside-element">
    <!-- Carousel -->
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="../../src/assets/0ED4BEB1-F357-4D9E-8679-D824FB8F945C.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="../../src/assets/5A4C50B2-5552-4E53-9115-51074B6FA729.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item w-100">
          <img
            src="../../src/assets/BB430FAC-CE25-439E-8D69-B10B5B332CE9.jpeg"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" ariahidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="about">
      <h2>Tentang BEDA CERITA</h2>
      <div class="about-img">
        <img src="../assets/about-1.jpg" alt="about" />
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos ducimus
        quam repudiandae itaque deserunt esse accusantium inventore autem
        adipisci debitis dolorem perferendis eaque cupiditate aperiam, doloribus
        consequuntur dicta impedit omnis magni quas illum ipsam reiciendis!
        Dolorem voluptas quam enim dolores odit mollitia, eaque ipsam. Facilis
        atque, saepe rerum cum molestias minus nemo recusandae sapiente
        distinctio voluptatem. Id error fuga reiciendis, tenetur accusamus eos
        quos, pariatur praesentium nihil omnis in voluptate atque excepturi nam?
        Officiis non ut aliquid, nemo porro aliquam sapiente qui facilis
        possimus expedita, aut libero magni, commodi cupiditate quo voluptate.
        Repellendus, adipisci? Vel reiciendis labore perferendis consectetur ab.
      </p>
    </div>

    <div class="menu">
      <h2>Signature Menu</h2>
      <div class="container">
        <input type="radio" name="slider" id="item-1" />
        <input type="radio" name="slider" id="item-2" checked />
        <input type="radio" name="slider" id="item-3" />
        <div class="cards">
          <label class="card h-100" for="item-1" id="song-1">
            <div style="text-align: center; background-color: bisque">
              <img
                src="../assets/cerita-1.jpg"
                class="card-img-top"
                alt="song"
              />
            </div>
            <div class="card-body">
              <h3 class="card-title">Cerita 1.0</h3>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </label>
          <label class="card h-100" for="item-2" id="song-2">
            <div style="text-align: center; background-color: bisque">
              <img
                src="../assets/cerita-1.jpg"
                class="card-img-top"
                alt="song-2"
              />
            </div>
            <div class="card-body">
              <h3 class="card-title">Epilog</h3>
              <p class="card-text">
                Lorem, Quasi possimus minima itaque? Magnam voluptatum molestias
                corrupti rem molestiae.
              </p>
            </div>
          </label>
          <label class="card h-100" for="item-3" id="song-3">
            <div style="text-align: center; background-color: bisque">
              <img
                src="../assets/cerita-1.jpg"
                class="card-img-top"
                alt="song-3"
              />
            </div>
            <div class="card-body">
              <h3 class="card-title">Kesan Pertama</h3>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>

    <div class="contact" id="contact">
      <h2>Lokasi BEDA CERITA</h2>
      <iframe
        class="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.075534412541!2d107.6557487609417!3d-6.888341186867596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78b2c130ef7%3A0x49b6024b0f4d8da6!2sBeda%20Cerita%20Coffee!5e0!3m2!1sid!2sid!4v1694859271817!5m2!1sid!2sid"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url("style/style.scss");

.offside-element {
  position: relative;
  top: -100px;
}

.carousel {
    margin-top: 10%;
    height: 100%;
  }

  .carousel-item img{
    height: 800px;
  }

  .about {
    padding: 5rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 24px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 1000px;
      height: 400px;
      margin-bottom: 50px;
    }
  }

  .menu {
    padding: 1rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 45rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 80%;
      height: 650px;
      padding-left: 20%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 300%;
  }

@media screen and (max-width: 1440px){
  .carousel {
    margin-top: 13%;
    height: 100%;
  }

  .carousel-item img{
    height: 670px;
  }

  .about {
    padding: 3rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 20px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 1000px;
      height: 300px;
      margin-bottom: 30px;
    }
  }

  .menu {
    padding: 1rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 50rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 650px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 300%;
  }
}
@media screen and (max-width: 1300px){
  .carousel {
    margin-top: 13%;
    height: 100%;
  }

  .carousel-item img{
    height: 500px;
  }

  .about {
    padding: 3rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 18px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 800px;
      height: 200px;
      margin-bottom: 20px;
    }
  }

  .menu {
    padding: 1rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 25rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 300px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 200%;
  }
}
@media screen and (max-width: 1024px) {
  .carousel {
    margin-top: 18%;
    height: 100%;
  }

  .carousel-item img{
    height: 670px;
  }

  .about {
    padding: 1rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 300px;
      margin-bottom: 50px;
    }
  }

  .menu {
    padding: 1rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 35rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 500px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 200%;
  }
}
@media screen and (max-width: 884px) {
  .carousel {
    margin-top: 21%;
    height: 100%;
  }

  .carousel-item img{
    height: auto;
  }

  .about {
    padding: 5rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 800px;
      height: 300px;
      margin-bottom: 50px;
    }
  }

  .menu {
    padding: 5rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 30rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 500px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 200%;
  }
}
@media screen and (max-width: 460px) {
  .carousel {
    margin-top: 30%;
    height: 100%;
  }

  .carousel-item img{
    height: auto;
  }

  .about {
    padding: 5rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 200px;
      margin-bottom: 50px;
    }
  }

  .menu {
    padding: 5rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 30rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 400px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 200%;
  }
}
@media screen and (max-width: 390px) {
  .carousel {
    margin-top: 40%;
    height: 100%;
  }

  .carousel-item img{
    height: auto;
  }

  .about {
    padding: 5rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }

    p {
      font-size: 16px;
      text-align: center;
    }

    .about-img img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 200px;
      margin-bottom: 50px;
    }
  }

  .menu {
    padding: 5rem 7% 1.4rem;

    h2 {
      text-align: center;
      font-size: 2.6rem;
      margin-bottom: 3rem;
    }
  }

  .contact {
    padding: 25rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    .maps {
      width: 90%;
      height: 400px;
      padding-left: 10%;
    }
  }

  .contact h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
  .contact .row {
    padding: 7%;
  }

  .card-body{
      background-color: #313131;
      -webkit-text-fill-color: white;
  }
  .card-body .card-title{
    font-size: 150%;
  }
}

</style>
