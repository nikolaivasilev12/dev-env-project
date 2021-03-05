<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
    <div>
      <v-row>
    <v-card v-for="char in characters.results" :key="char.id"
    class="mx-auto mt-5"
    max-width="344"
  >

    <v-img
      :src="char.thumbnail.path + '.' + char.thumbnail.extension"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ char.name }}
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions v-if="char.description">
      <v-btn
        color="orange lighten-2"
        text
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition v-if="char.description">
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
         {{ char.description }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-row>
    </div>
    <v-pagination
    class="mt-5"
      v-model="page"
      :length="Math.ceil(characters.total / 20)"
      @input="getChars"
      @next="getChars"
      @previous="getChars"
    ></v-pagination>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios"
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    characters: [],
    page: 74,
    show: false,
  }),
  mounted() {
    this.getChars()
  },
  methods: {
    async getChars () {
      const page = this.page
      await axios.post(`http://localhost:4000/characters`, {page} ).then(res => {
        console.log(res)
        this.characters = res.data.data
      })
    }
  },
};
</script>
