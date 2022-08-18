<template>
    <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img class="bi me-2" width="60" height="52" src="/img/logo.svg" />
        <span class="fs-4">Rick And Morty</span>
      </a>
      <form class="d-flex col-12 col-lg-auto mb-3 mb-lg-0">
        <input type="search" class="form-control" placeholder="Pesquisar..." aria-label="Persquisar">
      </form>
    </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>