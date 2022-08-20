<template>
  <div class="row" v-if="loading">
    <div class="col-sm-6 col-md-3" v-for="card in [1, 2, 3, 4]" :key="card">
      <div class="card" aria-hidden="true">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-12"></span>
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-sm-6 col-md-3 p-2" v-for="card in data" :key="card.id">
      <div class="card" aria-hidden="true">
        <div class="card-body">
            <div class="card-title">
                <router-link class="fw-bold" :to="'/'+ type + '/' + card.id">{{ card.id }} - {{ card.name }}</router-link> 
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: {
    type: String,
    loading: Boolean,
    data: Object
  },
  methods:{

  }
};
</script>

<style scoped>
</style>