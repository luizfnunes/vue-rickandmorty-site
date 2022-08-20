<template>
  <div class="container">
    <h1>{{ location.name }}</h1>
    <div class="d-flex gap-3">
      <span><strong>Tipo: </strong>{{ location.type }}</span>
      <span><strong>Dimensão: </strong>{{ location.dimension }}</span>
    </div>
    <h1 class="mt-3 mb-2">Residentes</h1>
    <div class="row" v-if="residents.length > 0">
      <Card :loading="loadingResidents" :data="residents" type="character" />
    </div>
    <div class="alert alert-info" v-else>
      <p>Sem residentes para exibir!</p>
    </div>
  </div>
</template>

<script>
import Locations from "@/services/locations";
import Characters from "@/services/characters";
import Card from "@/components/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      id: 0,
      location: {},
      residentsIds: "",
      residents: [],
      loadingResidents: true,
    };
  },
  methods: {
    setResidents(url) {
      let finalResidents = "";
      for (let index = 0; index < url.length; index++) {
        let element = url[index].split("/").pop();
        if (index != url.length - 1) {
          element += ",";
        }
        finalResidents += element;
      }
      this.residentsIds = finalResidents;
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    Locations.get(this.id).then((response) => {
      this.location = response.data;
      this.setResidents(this.location.residents);
      Characters.getList(this.residentsIds).then((response) => {
        this.residents = response.data;
        console.log(response.data);
        this.loadingResidents = false;
      });
    });
  },
};
</script>