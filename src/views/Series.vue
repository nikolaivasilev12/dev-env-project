<template>
  <div>
    <div>
      <v-col cols="10" offset-md="1">
        <h1 class="text-center titletxt pb-7 mt-4">Series</h1>
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
              v-if="!series.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card
            v-for="serie in series.results"
            :key="serie.id"
            class="mx-auto mt-5 offset-2"
            max-width="300"
            min-width="300"
          >
            <v-img
              :src="serie.thumbnail.path + '.' + serie.thumbnail.extension"
              height="200px"
              contain
            ></v-img>

            <v-card-title>
              {{ serie.title }}
            </v-card-title>
            <v-btn
              :to="{ path: '/serie/' + serie.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About series
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-if="series.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(series.total / 20)"
          @input="getSeries"
          @next="getSeries"
          @previous="getSeries"
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
    series: [],
    page: 1,
  }),
  mounted() {
    this.getSeries();
  },
  methods: {
    async getSeries() {
      const page = this.page;
      await axios
        .post(`http://localhost:4000/series`, { page })
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.series = res.data.data;
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