<template>
  <div>
    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-btn color="white" text rounded class="my-2" to="/">
          Characters
        </v-btn>
        <v-btn color="white" text rounded class="my-2"> Series </v-btn>
        <v-btn color="white" text rounded class="my-2"> Comics </v-btn>
        <v-col class="dark lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Simas & Niko</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Characters", "Comics", "Something"],
  }),
};
</script>

<style scoped>
</style>