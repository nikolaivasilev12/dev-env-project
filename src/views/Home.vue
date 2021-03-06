<template>
  <div>
    <div>
      <v-col cols="12">
      <h1 class="text-center pb-7">Marvel's Universe Characters</h1>
        <v-row class="d-flex" justify="center">
          <v-card
            v-for="char in characters.results"
            :key="char.id"
            class="mx-auto mt-5 offset-2"
            max-width="300" min-width="300"
          >
            <v-img
              :src="char.thumbnail.path + '.' + char.thumbnail.extension"
              height="200px"
            ></v-img>

            <v-card-title>
              {{ char.name }}
            </v-card-title>
            <v-btn color="orange lighten-2" text> More about hero </v-btn>
          </v-card>
        </v-row>
      </v-col>
    </div>
    <v-row justify="center">
      <v-col cols="4">
        <v-pagination
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
          console.log(res);
          this.characters = res.data.data;
        });
    },
  },
};
</script>
