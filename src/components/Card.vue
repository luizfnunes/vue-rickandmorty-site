<template>
  <div class="row" v-if="loading">
    <div class="col-sm-6 col-md-3" v-for="card in [1, 2, 3, 4]" :key="card">
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-sm-6 col-md-3 p-2" v-for="card in data" :key="card.id">
      <div class="card" aria-hidden="true">
        <img :src="card.image" class="card-img-top" :alt="card.name">
        <div class="card-body">
          <h5 class="card-title">
            <router-link :to="'/' + type + '/' + card.id" class="col-6">{{ card.name }}</router-link>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    type: String,
    loading: Boolean,
    data: Object
  },
};
</script>

<style scoped>
.card-body{
    min-height: 90px;
}
.card-title a{
    text-decoration: none;
}
</style>