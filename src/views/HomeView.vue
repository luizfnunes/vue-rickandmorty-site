<template>
  <div class="container">
    <router-link to="/characters" class="h3">Personagens</router-link>
    <Card :loading="loadingCharacters" :data="dataCharacters" type="character"/>
    <router-link to="/locations" class="h3 mt-3">Lugares</router-link>
    <Lilcard :loading="loadingLocations" :data="dataLocations" type="location"/>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import Lilcard from '@/components/Lilcard.vue';

import Characters from '@/services/characters';
import Locations from '@/services/localtions';
export default {
  name: 'HomeView',
  components: {
    Card,
    Lilcard
  },
  data(){
    return{
      loadingCharacters: true,
      loadingLocations: true,
      dataCharacters: [],
      dataLocations: [],
    }
  },
  methods: {
    test(){
      this.loading = !this.loading
    }
  },
  mounted(){
    Characters.random().then(response => {
      this.dataCharacters = response.data;
      this.loadingCharacters = false;
    });
    Locations.random().then(response => {
      this.dataLocations = response.data;
      this.loadingLocations = false;
    });
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}
</style>
