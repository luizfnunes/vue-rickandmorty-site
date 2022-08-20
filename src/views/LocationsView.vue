<template>
  <div class="container">
    <h1>Lugares</h1>
    <LocationCard
      :loading="loadingLocations"
      :data="dataLocations"
      type="location"
    />
    <Paginator 
      v-if="!loadingCharacters"
      :maxPages="info.pages"
      :page="page"
      type="locations"
    />
  </div>
</template>

<script>
import LocationCard from '@/components/LocationCard.vue';
import Paginator from '@/components/Paginator.vue';

import Locations from '@/services/locations';

export default {
  components:{
    LocationCard,
    Paginator
  },
  data() {
    return {
      page: 1,
      info: {},
      loadingLocations: true,
      dataLocations: [],
      pagePagination: [],
    };
  },
  mounted(){
    this.page = parseInt(this.$route.params.page);
    Locations.all(this.page).then((response) => {
      this.dataLocations = response.data.results;
      this.info = response.data.info;
      console.log(this.info);
      this.loadingLocations = false;
    });
  },
}
</script>