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
        <div class="image-container">
          <img src="../assets/logo-beda-cerita.png" alt="@bedacerita" />
        </div>
        <div>
          <!-- icon Search -->
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
        </div>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
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
          <!-- <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> -->
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
  width: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 20px;
  justify-content: center;
}

.navbar {
  font-size: 2rem; /* "auto" mungkin tidak perlu, karena ukuran font sebaiknya diatur secara eksplisit */
}

.nav-item {
  padding-right: 50px;
}

/* Untuk mengatur gambar logo */
.image-container img {
  max-width: 50%; /* Gambar tidak melebihi lebar parent (kontainer) */
  height: auto; /* Tinggi gambar disesuaikan agar gambar tidak terdistorsi */
}

/* Media queries untuk mengatur konten berdasarkan resolusi layar */
@media screen and (max-width: 480px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 768px */
  .navbar {
    font-size: 15px;
  }

  .nav-item {
    padding-right: 10px;
  }

  .image-container {
    width: 200px;
  }

  .image-container img {
    max-width: 80%;
  }
}
/* Media queries untuk mengatur konten berdasarkan resolusi layar */
@media screen and (max-width: 768px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 768px */
  .navbar {
    font-size: 20px;
  }

  .nav-item {
    padding-right: 10px;
  }

  .image-container {
    width: 300px;
  }

  .image-container img {
    max-width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  /* Mengatur ukuran font dan padding pada elemen navbar saat layar lebih kecil dari 1024px */
  .navbar {
    font-size: 20px;
  }

  .nav-item {
    padding-right: 10px;
  }

  .image-container {
    width: 300px;
  }

  .image-container img {
    max-width: 100%;
  }
}
</style>
