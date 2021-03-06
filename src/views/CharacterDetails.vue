<template>
    <div>
        <h1>Single Character details</h1>
        <ul>
            data i wanna show
            <li>
                asd
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    character: [],
    charId: ""
  }),
  mounted() {
    this.getCharacter();
  },
  methods: {
  async getCharacter(charId) {
      await axios
        .post(`http://localhost:4000/character`, charId)
        .then((res) => {
          console.log(res);
          this.character = res.data.data;
        });
    },
  },
};
</script>