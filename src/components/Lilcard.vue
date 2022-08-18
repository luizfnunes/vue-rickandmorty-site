<template>
  <div class="row" v-if="loading">
    <div class="col-md-3" v-for="card in [1, 2, 3, 4]" :key="card">
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-12"></span>
            <span class="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-md-3 p-2" v-for="(card, index) in data" :key="card.id">
      <div class="card mb-3" aria-hidden="true">
        <div class="row g-0">
          <div class="col-sm-3 d-flex align-items-center">
            <img
              :src="images[index]"
              class="img-fluid rounded-start p-1"
              :alt="card.name"
            />
          </div>
          <div class="col-sm-9">
            <div class="p-2">
              <router-link :to="'/' + type + '/' + card.id" class="h5 card-title">{{ card.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lilcard",
  props: {
    type: String,
    loading: Boolean,
    data: Object,
  },
  data() {
    return {
      images: [
        "/img/rick.svg",
        "/img/morty.svg",
        "/img/beth.svg",
        "/img/summer.svg",
      ],
    };
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>