<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!comic.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="comi in comic.results" :key="comi.key">
          <v-col cols="12">
            <v-row justify="center">
              <v-img
              class="mt-2"
                max-height="500"
                max-width="500"
                :src="comi.thumbnail.path + '.' + comi.thumbnail.extension"
              ></v-img>
            </v-row>
            <h1 class="text-center mt-3">{{ comi.title }}</h1>
            <h3 class="text-center">Price: {{ comi.prices[0].price + "$" }}</h3>
            <v-col cols="10" offset-md="1">
              <p class="text-center">Characters part of the story:</p>
              <div v-for="char in comi.characters.items" :key="char.id">
                <p class="text-center">{{ char.name }}</p>
              </div>
              <p class="text-center">{{ comi.description }}</p>
            </v-col>
          </v-col>
          <v-row justify="center">
            <div v-for="url in comi.urls" :key="url.key">
              <a class="pa-2" :href="url.url" target="_blank">
                <v-btn color="red" text>{{ url.type }}</v-btn></a
              >
            </div>
          </v-row>
          <v-row class="mt-5 pb-8" justify="center">
            <v-col cols="3" offset-md="1">
              <h2>Series</h2>
              <p>{{ comi.series.name }}</p>
            </v-col>
            <v-col cols="3">
              <h2>Creators</h2>
              <li v-for="item in comi.creators.items" :key="item.key">
                {{ item.name + " - " + item.role }}
              </li>
            </v-col>
            <v-col cols="3">
              <h2>Stories</h2>
              <li v-for="item in comi.stories.items" :key="item.key">
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
    comic: [],
  }),
  mounted() {
    this.getComic();
  },
  methods: {
    async getComic() {
      const comicsId = this.$route.params.id;
      await axios
        .post(`http://localhost:4000/comic`, { comicsId })
        .then((res) => {
          console.log(res);
          this.comic = res.data.data;
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
