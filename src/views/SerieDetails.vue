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
              <div
                class="d-inline-flex justify-center"
                v-for="serie in serie.characters.items"
                :key="serie.id"
              >
                <v-chip class="ml-1 my-1" label>
                  <v-icon left> mdi-label </v-icon>
                  {{ serie.name }}
                </v-chip>
              </div>
              <p v-if="serie.rating" class="mt-1 text-center pbold">
                Rating: {{ serie.rating }}
              </p>
              <p v-if="serie.type" class="text-center pbold">
                Type: {{ serie.type }}
              </p>
              <p v-if="serie.startYear" class="text-center pbold">
                Started:
                {{ serie.startYear + " - " + "Ended: " + serie.endYear }}
              </p>
              <p v-if="serie.description" class="text-center">
                {{ serie.description }}
              </p>
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
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h2>Creators</h2>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in serie.creators.items" :key="item.key">
                      {{ item.name + " - " + item.role }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h2>Comics</h2>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in serie.comics.items" :key="item.key">
                      {{ item.name }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="3">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h2>Stories</h2>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <li v-for="item in serie.stories.items" :key="item.key">
                      {{ item.name }}
                    </li>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
      await axios
        .post(`http://localhost:4000/serie`, { SerieId })
        .then((res) => {
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
.pbold {
  font-weight: bold;
}
</style>
