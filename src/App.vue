<template>
  <div id="app">
    <div class="header-container">
      <Header />
    </div>
    <router-view />
    <div class="footer-container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
.header-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999; /* Atur nilai z-index untuk memastikan header muncul di atas konten lainnya */
  background-color: #fff; /* Ganti dengan warna latar belakang yang Anda inginkan */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan jika diperlukan */
}

.footer-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; /* Atur nilai z-index untuk memastikan header muncul di atas konten lainnya */
  background-color: #fff; /* Ganti dengan warna latar belakang yang Anda inginkan */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tambahkan bayangan jika diperlukan */ 
}
/* Atur margin atas pada elemen yang berada di bawah header agar tidak tertutupi oleh header */
.router-view {
  margin-top: 70px; /* Sesuaikan dengan tinggi header Anda */
}

/* Style untuk Header komponen Anda bisa ditambahkan di dalam komponen Header.vue */
</style>
