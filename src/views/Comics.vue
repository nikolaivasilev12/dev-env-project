<template>
  <div>
    <div>
      <v-col cols="10" offset-md="1">
        <h1 class="text-center titletxt pb-7 mt-4">Comics</h1>
        <v-col cols="2" offset="10">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Search.."
            dense
            v-model="searchChar"
            color="red"
            outlined
          ></v-text-field>
        </v-col>
        <v-row class="d-flex" justify="center">
          <div>
            <v-progress-circular
            class="loader"
              v-if="!comics.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card
            v-for="comic in comics.results"
            :key="comic.id"
            class="mx-auto mt-5 offset-2"
            max-width="300"
            min-width="300"
          >
            <v-img
              :src="comic.thumbnail.path + '.' + comic.thumbnail.extension"
              height="200px"
              contain
            ></v-img>

            <v-card-title>
              {{ comic.title }}
            </v-card-title>
             <v-btn :to="{ path: '/comic/' + comic.id}" class="mt-5 mb-1" color="red" text>
                About Comics
              </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-if="comics.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(comics.total / 20)"
          @input="getComics"
          @next="getComics"
          @previous="getComics"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data: () => ({
    searchChar: "",
    comics: [],
    page: 1,
  }),
  mounted() {
    this.getComics();
  },
  methods: {
    async getComics() {
      const page = this.page;
      await axios
        .post(`http://localhost:4000/comics`, { page })
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.comics = res.data.data;
        });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.titletxt {
  color: red;
  text-transform: uppercase;
  font-size: 44px;
    letter-spacing: 5px;
  font-family: 'Bangers', cursive !important;
}

</style>