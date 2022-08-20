<template>
  <nav class="py-2 bg-light border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/"
            >Início</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/about"
            >Sobre</router-link
          >
        </li>
      </ul>

      <ul class="nav">
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/characters/1"
            >Personagens</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/locations/1"
            >Lugares</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link link-dark px-2" to="/episodes/1"
            >Episódios</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>