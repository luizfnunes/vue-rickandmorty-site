<template>
  <div class="container">
    <h1>Episódios</h1>
    <SingleCard
      :loading="loadingEpisodes"
      :data="dataEpisodes"
      type="episode"
    />
    <Paginator 
      v-if="!loadingEpisodes"
      :maxPages="info.pages"
      :page="page"
      type="episodes"
    />
  </div>
</template>

<script>
import SingleCard from '@/components/SingleCard.vue';
import Paginator from '@/components/Paginator.vue';

import Episodes from '@/services/episodes';

export default {
  components:{
    SingleCard,
    Paginator
  },
  data() {
    return {
      page: 1,
      info: {},
      loadingEpisodes: true,
      dataEpisodes: [],
      pagePagination: [],
    };
  },
  mounted(){
    this.page = parseInt(this.$route.params.page);
    Episodes.all(this.page).then((response) => {
      this.dataEpisodes = response.data.results;
      this.info = response.data.info;
      this.loadingEpisodes = false;
    });
  },
}
</script>

<style>
a{
  text-decoration: none;
}
</style>