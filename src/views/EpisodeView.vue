<template>
  <div class="container">
    <h1 class="mb-3">{{ episode.name }}</h1>
    <p class="d-flex gap-3">
      <span><strong>Identificação: </strong>{{ episode.episode }}</span>
      <span><strong>Estréia: </strong>{{ episode.air_date }}</span>
      <span><strong>Personagens: </strong>{{ characters.length }}</span>
    </p>
    <h1 class="mt-3 mb-2">Personagens</h1>
    <div class="row" v-if="characters.length > 0">
      <Card :loading="loadingCharacters" :data="characters" type="character" />
    </div>
    <div class="alert alert-info" v-else>
      <p>Sem residentes para exibir!</p>
    </div>
  </div>
</template>

<script>
import Episodes from "@/services/episodes";
import Characters from "@/services/characters";
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      id: 0,
      episode: {},
      charactersIds: [],
      characters: {},
      loadingCharacters: false
    };
  },
  methods: {
    setCharacters(url) {
      let finalCharacters = "";
      for (let index = 0; index < url.length; index++) {
        let element = url[index].split("/").pop();
        if (index != url.length - 1) {
          element += ",";
        }
        finalCharacters += element;
      }
      this.charactersIds = finalCharacters;
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    Episodes.get(this.id).then((response) => {
      this.episode = response.data;
      this.setCharacters(this.episode.characters);
      Characters.getList(this.charactersIds).then((response) => {
        this.characters = response.data;
        console.log(response.data);
        this.loadingCharacters = false;
      });
    });
  },
};
</script>

<style scoped>

</style>