<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

let daftarMinum = [
  {src:"menu/EspressoBased-Bittersweet.jpg", alt:'Bittersweet', description:'Espresso Based', price:'IDR 10K'},
  {src:"menu/EspressoBased-Latte.jpg", alt:'Latte', description:'Makanan enak', price:'IDR 10K'},
  {src:"menu/EspressoBased-Bittersweet.jpg", alt:'Makanan 1', description:'Makanan enak', price:'IDR 10K'},
  ]
</script>
<template>
  <div class="menu">
    <h1>Menu</h1>
    <!-- Tampilkan informasi kontak kedai kopi -->
    <div class="menu-content">
      <div class="menu-item" v-for="minuman in daftarMinum" :key="minuman">
          <img v-bind:src="require(`@/assets/${minuman.src}`)" :alt="minuman.alt">
          <h2>{{minuman.alt}}</h2>
          <p> {{ minuman.src }}</p>
          <p>{{ minuman.description }}</p>
          <p>{{ minuman.price }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.menu {
  padding: 10rem 7% 1.4rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
}
.menu-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}
.menu-item {
    width: 300px;
    background-color: #fff;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
}

.menu-item img {
    max-width: 100%;
    height: auto;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 16px;
}
</style>