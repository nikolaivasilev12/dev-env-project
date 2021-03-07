<template>
  <v-card>
    <v-app-bar
      color="#6A76AB"
      dark
      shrink-on-scroll
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/">Home</v-tab>
          <v-tab to="/characters">Characters</v-tab>
          <v-tab to="/comics">Comics</v-tab>
          <v-tab>Series</v-tab>
          <v-tab>Stories</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>