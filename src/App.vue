<template>
  <div>
    <v-app>
      <Navigation />
      <v-main>
        <Home />
      </v-main>
      <VueFooter />
    </v-app>
  </div>
</template>

<script>
import VueFooter from "./components/VueFooter.vue";
import Home from "./views/Home.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",

  components: {
    VueFooter,
    Home,
    Navigation,
  },
};
</script>

<style>
.whitetxt {
  color: #fff;
}
.v-sheet.v-footer:not(.v-sheet--outlined){
    z-index: 999 !important;
}
</style>