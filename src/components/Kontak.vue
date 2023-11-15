<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="contact">
    <!-- <h1>Hubungi Kami</h1> -->
    <div class="container">
      <h1>
        Hubungi Kami
      </h1>
      <form action="mailto:erwinbonchu61@email.com" method="post" enctype="text/plain">
  
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" required>
        </div>
  
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" name="email" required>
        </div>
  
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
        </div>
  
        <button type="submit" class="btn btn-primary">Send Email</button>
      </form>
    </div>
    <!-- Tampilkan informasi kontak kedai kopi -->
  </div>
</template>
<style scoped lang="scss">
.contact {
  padding: 8rem 7% 1.4rem;
  display: flex;
  justify-content: center;
  h1 {
    color: #f4f4f4;
    text-align: center;
    margin-bottom: 3rem;
  }
}
.container {
  background-image: url('../assets/about.jpg'); /* Replace with the path to your image */
  background-size: cover;
  background-position: center;
  width: 50%;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
body {
  background-color: #f4f4f4;
}


label {
  color: #fff;
}

button {
  background-color: #4caf50;
  color: #fff;
}

button:hover {
  background-color: #45a049;
}
</style>
