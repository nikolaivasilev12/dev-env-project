<template>
  <div>
    <v-row>
      <v-col cols="10" offset-md="1">
        <div class="loader">
          <v-progress-circular
            v-if="!story.results"
            :size="70"
            :width="7"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <div v-for="story in story.results" :key="story.key">
          <v-col cols="12">
            <h1 class="text-center mt-3">{{ story.title }}</h1>
            <v-col cols="8" offset-md="2">
              <p class="text-center">Characters part of the story:</p>
              <div v-for="story in story.characters.items" :key="story.id">
                <p class="text-center">{{ story.name }}</p>
              </div>
              <p class="text-center">
                Original Issue: {{ story.originalIssue.name }}
              </p>
              <p class="text-center">{{ story.description }}</p>
            </v-col>
          </v-col>
          <v-row class="mt-5 pb-8" justify="center">
            <v-col cols="3" offset-md="1">
              <h2>Creators</h2>
              <li v-for="item in story.creators.items" :key="item.key">
                {{ item.name + " - " + item.role }}
              </li>
            </v-col>
            <v-col cols="3">
              <h2>Comics</h2>
              <li v-for="item in story.comics.items" :key="item.key">
                {{ item.name }}
              </li>
            </v-col>
            <v-col cols="3">
              <h2>Series</h2>
              <li v-for="item in story.series.items" :key="item.key">
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
    story: [],
  }),
  mounted() {
    this.getStory();
  },
  methods: {
    async getStory() {
      const StoryId = this.$route.params.id;
      await axios
        .post(`http://localhost:4000/story`, { StoryId })
        .then((res) => {
          console.log(res);
          this.story = res.data.data;
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
