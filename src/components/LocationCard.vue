<template>
  <div class="row" v-if="loading">
    <div class="col-sm-6 col-md-3" v-for="card in [1, 2, 3, 4]" :key="card">
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-12"></span>
          </h5>
          <p class="card-text placeholder-glow">
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
        <h5 class="card-header">
            <router-link :to="'/' + type + '/' + card.id" class="col-6">{{ card.name }}</router-link>
        </h5>
        <div class="card-body">
          <ul>
            <li><strong>Tipo:</strong> {{ card.type }}</li>
            <li><strong>Dimensão:</strong> {{ card.type }}</li>
            <li><strong>Personagens:</strong> {{ card.residents.length }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationCard",
  props: {
    type: String,
    loading: Boolean,
    data: Object
  },
};
</script>

<style scoped>
.card-header{
    min-height: 60px;
}
.card-header a{
    text-decoration: none;
}
.card-body{
    min-height: 150px;
}
.card-title a{
    text-decoration: none;
}
ul{
  list-style: none;
}
</style>