<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="image-container" href="#">
          <img src="../assets/logo-beda-cerita.png" alt="@bedacerita" />
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" style="float: none; margin: 0 auto;">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link"
                >Tentang Kami</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/menu" class="nav-link">Menu</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/kontak" class="nav-link">Kontak</router-link>
            </li>
          </ul>
        </div>
        <div style="width: 20%;">
          <!-- icon Search -->
          
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    handleSearch() {
      // Tambahkan logika untuk menangani klik tombol pencarian di sini
    },
  },
};
</script>

<style>
.image-container {
  width: 400px;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: center;
}
.navbar {
  font-size: 1.8rem; /* "auto" mungkin tidak perlu, karena ukuran font sebaiknya diatur secara eksplisit */
}

.nav-item {
  padding: 1rem;
  width: auto;
  text-align: center;
}

/* Untuk mengatur gambar logo */
.image-container img {
  max-width: 100%; /* Gambar tidak melebihi lebar parent (kontainer) */
}


@media screen and (min-width: 1920px) {
  .navbar {
    font-size: 300%;
  }

  .nav-item {
    margin: 20px;
    padding-right: 10px;
  }

  .image-container {
    margin-left: 100px;
    padding: 30px;
    width: 600px;
  }

  .image-container img {
    max-width: 200%;
  }
}
@media screen and (min-width: 1440px) {
  .navbar {
    font-size: 160%;
  }

  .nav-item {
    padding: 0;
    margin: 10px;
    padding-right: 5px;
  }

  .image-container {
    margin-left: 50px;
    padding: 10px;
    width: 400px;
  }

  .image-container img {
    max-width: 100%;
  }
}
@media screen and (max-width: 1024px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 1024px */
  .navbar {
    font-size: 120%;
  }

  .nav-item {
    padding: 0;
    margin: 8px;
    padding-right: 3px;
  }

  .image-container {
    margin-left: 30px;
    padding: 10px;
    width: 300px;
  }

  .image-container img {
    max-width: 100%;
  }
}

/* Media queries untuk mengatur konten berdasarkan resolusi layar */
@media screen and (max-width: 768px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 768px */
  .navbar {
    font-size: 200%;
  }


  .image-container {
    padding-left: 10%;
    width: 300px;
  }

  .image-container img {
    max-width: 100%;
  }
}

/* Media queries untuk mengatur konten berdasarkan resolusi layar */
@media screen and (max-width: 480px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 768px */
  .navbar {
    font-size: 15px;
  }

  .image-container {
    width: 200px;
  }

  .image-container img {
    max-width: 100%;
  }
}

</style>
