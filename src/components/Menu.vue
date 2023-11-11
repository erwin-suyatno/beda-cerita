<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
let daftarMinum = [
  {
    src: "menu/EspressoBased-Bittersweet.jpg",
    alt: "Bittersweet",
    description: "Espresso Based",
    price: "IDR 10K",
  },
  {
    src: "menu/EspressoBased-Latte.jpg",
    alt: "Latte",
    description: "Makanan enak",
    price: "IDR 10K",
  },
  {
    src: "menu/Signature-Cerita-1.0.jpg",
    alt: "Cerita 1.0",
    description: "Signature",
    price: "IDR 10K",
  },
  {
    src: "menu/Signature-Epilog.jpg",
    alt: "Epilog",
    description: "Signature",
    price: "IDR 10K",
  },
  {
    src: "menu/Signature-Kesan-Pertama.jpg",
    alt: "Kesan Pertama",
    description: "Signature",
    price: "IDR 10K",
  },
  {
    src: "menu/MilkBased-Chocolate.jpg",
    alt: "Chocolate",
    description: "Milk Based",
    price: "IDR 10K",
  },
  {
    src: "menu/MilkBased-Matcha.jpg",
    alt: "Matcha",
    description: "Milk Based",
    price: "IDR 10K",
  },
  {
    src: "menu/MilkBased-Cookies-n-Cream.jpg",
    alt: "Cookies & Cream",
    description: "Milk Based",
    price: "IDR 10K",
  },
  {
    src: "menu/Mocktail-Angin-Lalu.jpg",
    alt: "Angin Lalu",
    description: "Mocktail",
    price: "IDR 10K",
  },
  {
    src: "menu/Mocktail-Deep-Purple.jpg",
    alt: "Deep Purple",
    description: "Mocktail",
    price: "IDR 10K",
  },
  {
    src: "menu/Mocktail-Gemini.jpg",
    alt: "Gemini",
    description: "Mocktail",
    price: "IDR 10K",
  },
  {
    src: "menu/Mocktail-Naked-Brown.jpg",
    alt: "Naked Brown",
    description: "Mocktail",
    price: "IDR 10K",
  },
];
let daftarMakan = [
  {
    src: "menu/LightBites-Banana-Roll.jpg",
    alt: "Banana Roll",
    description: "Light Bites",
    price: "IDR 10K",
  },
  {
    src: "menu/LightBites-Dimsum-Kukus.jpg",
    alt: "Dimsum Kukus",
    description: "Light Bites",
    price: "IDR 10K",
  },
  {
    src: "menu/Signature-Cerita-1.0.jpg",
    alt: "Garlic Bread",
    description: "Light Bites",
    price: "IDR 10K",
  },
  {
    src: "menu/LightBites-Mini-Pau.jpg",
    alt: "Mini Pau",
    description: "Light Bites",
    price: "IDR 10K",
  },
  {
    src: "menu/LightBites-French-Fries-with-Sausages.jpg",
    alt: "French Fries with Sausages",
    description: "Light Bites",
    price: "IDR 10K",
  },
  {
    src: "menu/LightBites-Cireng-Bumbu.jpg",
    alt: "Cireng Bumbu",
    description: "LightBites",
    price: "IDR 10K",
  },
  {
    src: "menu/Meals-Bakso-Goreng-Chili-Oil.jpg",
    alt: "Bakso Goreng Chili Oil",
    description: "Meals",
    price: "IDR 10K",
  },
  {
    src: "menu/Meals-Spaghetti.jpg",
    alt: "Spaghetti",
    description: "Meals",
    price: "IDR 10K",
  },
];
</script>
<template>
  <div class="menu">
    <h1>Our Menu</h1>
    <!-- Tampilkan informasi kontak kedai kopi -->
      <div class="card bg-dark" style="cursor: default">
        <div>
          <h1 style="color: aliceblue">Minum</h1>
        </div>
        <div class="menu-content">
          <div class="menu-item" v-for="minuman in daftarMinum" :key="minuman">
            <img
              v-bind:src="require(`@/assets/${minuman.src}`)"
              :alt="minuman.alt"
            />
            <h2>{{ minuman.alt }}</h2>
            <p>{{ minuman.description }}</p>
            <p>{{ minuman.price }}</p>
          </div>
        </div>
      </div>
    <br />
    
      <div class="card-menu bg-dark" style="cursor: default">
        <div>
          <h1 style="color: aliceblue">Makanan</h1>
        </div>
        <div class="menu-content">
          <div class="menu-item" v-for="makanan in daftarMakan" :key="makanan">
            <img
              v-bind:src="require(`@/assets/${makanan.src}`)"
              :alt="makanan.alt"
            />
            <h2>{{ makanan.alt }}</h2>
            <p>{{ makanan.description }}</p>
            <p>{{ makanan.price }}</p>
          </div>
        </div>
      </div>
    
  </div>
</template>
<style scoped lang="scss">
.card-menu{
  margin: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
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
