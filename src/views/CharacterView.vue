<template>
  <div class="container">
    <h1 class="mb-3">{{ character.name }}</h1>
    <hr>
    <section class="d-flex gap-3">
      <a class="image-link" href="#"
        ><img
          class="image w-100"
          :src="character.image"
          :alt="character.name"
        />
      </a>
      <div class="w-100">
        <div class="row">
          <div class="col-sm-6">
            <h4 class="search-result-item-heading">{{ character.type }}</h4>
            <p class="info"><strong>Status: </strong>{{ character.status }}</p>
            <p class="info"><strong>Espécie: </strong> {{ character.species }}</p>
            <p class="info"><strong>Gênero: </strong>{{ character.gender }}</p>
            <p class="info"><strong>Origem: </strong>{{ origin.name }}</p>
            <p class="info"><strong>Lugar: </strong>{{ location.name }}</p>
            <p class="description"></p>
          </div>
          <div class="col-sm-6 text-align-center">
            <p class="value3 mt-sm fw-bold">Episódios</p>
            <div class="fs-mini text-muted">
              <ul>
                <li v-for="(episode, index) in character.episode" :key="index">
                  <router-link :to="getLinkEpisode(episode)">
                    <span v-html="getTextEpisode(episode)"></span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Characters from "@/services/characters";

export default {
  data() {
    return {
      id: 0,
      character: {},
      origin: {},
      location: {}
    };
  },
  methods: {
    getTextEpisode(episode) {
      let last = episode.split("/").pop();
      return 'Episódio ' + last;
    },
    getLinkEpisode(episode){
      let last = episode.split("/").pop();
      return '/episode/'+last;
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    Characters.get(this.id).then((response) => {
      this.character = response.data;
      this.origin = response.data.origin;
      this.location = response.data.location;
      console.log(this.character);
    });
  },
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-left: 0;
}
ul li {
  list-style: none;
}
</style>