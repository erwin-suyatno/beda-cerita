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
              <h3 class="card-title">Lembayung</h3>
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
              <h3 class="card-title">Americano</h3>
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
      <div class="row">
        <h2>Lokasi BEDA CERITA</h2>
        <iframe
          class="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.075534412541!2d107.6557487609417!3d-6.888341186867596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e78b2c130ef7%3A0x49b6024b0f4d8da6!2sBeda%20Cerita%20Coffee!5e0!3m2!1sid!2sid!4v1694859271817!5m2!1sid!2sid"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
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
  height: 100vh;
}

.about {
  padding: 15vh 7% 1.4rem;
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
    max-width: 100%;
    height: auto;
    width: 700px;
  }
}

.menu {
  padding: 8vh 7% 1.4rem;

  h2 {
    text-align: center;
    font-size: 2.6rem;
    margin-bottom: 3rem;
  }
}

.contact {
  display: flex;
  flex-direction: column;
  text-align: center;

  .maps {
    max-width: 100%;
    height: 400px;
  }
}

.contact h2 {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 3rem;
}
.contact .row {
  padding: 8rem 7% 1.4rem;
}

@media screen and (max-width: 1024px) {
  .offside-element {
    position: relative;
    top: 100px;
  }

  .carousel {
    height: 600px;
  }

  .about .about-img img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: auto;
    width: 500px;
  }

  .about {
    padding: 10vh 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .menu {
    padding: 5vh 7% 1.4rem;
  }
  .contact .maps {
    height: 500px;
  }

  .contact .row {
    padding: 0;
  }
}

@media screen and (max-width: 768px) {
  .offside-element {
    position: relative;
    top: 100px;
  }

  .carousel {
    height: 600px;
  }

  .about .about-img img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: auto;
    width: 500px;
  }

  .about {
    padding: 15rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .menu {
    padding: 5vh 7% 1.4rem;
  }
  .menu h2 {
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 460px) {
  .offside-element {
    position: relative;
    top: 80px;
  }

  .carousel {
    height: 300px;
  }

  .about .about-img img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    height: auto;
    width: 500px;
  }

  .about {
    padding: 5rem 7% 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .menu {
    padding: 5vh 7% 1.4rem;
  }
  .menu h2 {
    margin-bottom: 3rem;
  }
}
</style>
