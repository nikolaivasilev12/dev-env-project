<template>
  <div>
    <div>
      <v-col cols="10" offset-md="1">
        <h1 class="text-center titletxt pb-7 mt-4">Characters</h1>
        <v-col cols="3" offset="9">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Search for character.."
            v-model="searchChar"
            color="red"
            outlined
          ></v-text-field>
        </v-col>
        <v-row class="d-flex" justify="center">
          <div>
            <v-progress-circular
              class="loader"
              v-if="!characters.results"
              :size="70"
              :width="7"
              color="red"
              indeterminate
            ></v-progress-circular>
          </div>
          <v-card
            v-for="char in characters.results"
            :key="char.id"
            class="mx-auto mt-5 offset-2"
            max-width="300"
            min-width="300"
          >
            <v-img
              :src="char.thumbnail.path + '.' + char.thumbnail.extension"
              height="200px"
              contain
            ></v-img>

            <v-card-title>
              {{ char.name }}
            </v-card-title>
            <v-btn
              :to="{ path: '/character/' + char.id }"
              class="mt-5 mb-1"
              color="red"
              text
            >
              About character
            </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
          v-if="characters.results"
          class="mt-10 pb-15"
          v-model="page"
          :length="Math.ceil(characters.total / 20)"
          @input="getChars"
          @next="getChars"
          @previous="getChars"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  components: {},
  data: () => ({
    searchChar: "",
    characters: [],
    page: 1,
  }),
  mounted() {
    this.getChars();
  },
  methods: {
    async getChars() {
      const page = this.page;
      await axios
        .post(`http://localhost:4000/characters`, { page })
        .then((res) => {
          this.scrollToTop();
          console.log(res);
          this.characters = res.data.data;
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
}
</style>