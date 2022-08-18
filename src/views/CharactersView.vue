<template>
  <div class="container">
    <h1>Personagens</h1>
    <Card
      :loading="loadingCharacters"
      :data="dataCharacters"
      type="character"
    />
    <Paginator
      v-if="!loadingCharacters"
      :maxPages="info.pages"
      :page="page"
      type="characters"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Paginator from "@/components/Paginator.vue";

import Characters from "@/services/characters";

export default {
  name: "CharactersView",
  components: {
    Card,
    Paginator,
  },
  data() {
    return {
      page: 1,
      info: {},
      loadingCharacters: true,
      dataCharacters: [],
      pagePagination: [],
    };
  },
  mounted() {
    this.page = parseInt(this.$route.params.page);
    Characters.all(this.page).then((response) => {
      this.dataCharacters = response.data.results;
      this.info = response.data.info;
      console.log(this.info);
      this.loadingCharacters = false;
    });
  },
};
</script>
