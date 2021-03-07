<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!serie.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="serie in serie.results" :key="serie.key">
          <v-col cols="12">
            <v-row justify="center">
              <v-img
              class="mt-2"
                max-height="500"
                max-width="500"
                :src="serie.thumbnail.path + '.' + serie.thumbnail.extension"
              ></v-img>
            </v-row>
                <h1 class="text-center mt-3">{{ serie.title }}</h1>
            <v-col cols="8" offset-md="2">
                 <p class="text-center">Characters part of the story:</p>
              <div v-for="serie in serie.characters.items" :key="serie.id">
                <p class="text-center">{{ serie.name }}</p>
                </div>
                  <p class="text-center">Rating: {{ serie.rating }}</p>
                  <p class="text-center">Type: {{ serie.type }}</p>
                  <p class="text-center">Started: {{ serie.startYear + " - " + "Ended: " + serie.endYear }}</p>
              <p class="text-center">{{ serie.description }}</p>
            </v-col>
          </v-col>
          <v-row justify="center">
            <div v-for="item in serie.urls" :key="item.key">
              <a class="pa-2" :href="item.url" target="_blank">
                <v-btn color="red" text>{{ item.type }}</v-btn></a
              >
            </div>
          </v-row>
          <v-row class="mt-5 pb-8" justify="center">
            <v-col cols="3" offset-md="1">
              <h2>Creators</h2>
              <li v-for="item in serie.creators.items" :key="item.key">
                {{ item.name + " - " + item.role }}
              </li>
            </v-col>
            <v-col cols="3">
              <h2>Comics</h2>
              <li v-for="item in serie.comics.items" :key="item.key">
                {{ item.name }}
              </li>
            </v-col>
            <v-col cols="3">
              <h2>Stories</h2>
              <li v-for="item in serie.stories.items" :key="item.key">
                {{ item.name }}
              </li>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    serie: [],
  }),
  mounted() {
    this.getSerie();
  },
  methods: {
    async getSerie() {
      const SerieId = this.$route.params.id;
      await axios.post(`http://localhost:4000/serie`, { SerieId }).then((res) => {
        console.log(res);
        this.serie = res.data.data;
      });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
