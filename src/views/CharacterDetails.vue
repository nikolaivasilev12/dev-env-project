<template>
  <div>
    <h1>Single Character details</h1>
    <ul v-for="character in character.results" :key="character.key">
      <li>
        {{ character.thumbnail.path + "." + character.thumbnail.extension }}
      </li>
      <li>
        {{ character.name }}
      </li>
      <li>
        {{ character.description }}
      </li>
      <br />
      Series:
      <li v-for="item in character.series.items" :key="item.key">
        {{ item.name }}
      </li>
      <br />
      Comics:
      <li v-for="item in character.comics.items" :key="item.key">
        {{ item.name }}
      </li>
      <br />
      Stories:
      <li v-for="item in character.stories.items" :key="item.key">
        {{ item.name }}
      </li>
      <br />
      URLS:
      <li v-for="item in character.urls" :key="item.key">
        {{ item.url }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    character: [],
  }),
  mounted() {
    this.getCharacter();
  },
  methods: {
    async getCharacter() {
      const charId = this.$route.params.id;
      await axios
        .post(`http://localhost:4000/character`, { charId })
        .then((res) => {
          console.log(res);
          this.character = res.data.data;
        });
    },
  },
};
</script>