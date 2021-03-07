<template>
  <div>
    <v-col cols="12">
      <v-row>
        <v-col cols="3">
          <div class="image">
          <router-link to="/characters">
            <v-img height="625px" src="https://i.redd.it/7obyepujsgz31.jpg"> </v-img>
            <h2><span>Characters</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
           <router-link to="/comics">
            <v-img height="625px" src="https://pbs.twimg.com/media/EJ5PvOeUUAAtAJK?format=jpg&name=large"> </v-img>
            <h2><span>Comics</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
           <router-link to="/series">
            <v-img height="625px" src="https://pbs.twimg.com/media/ELMwrbnVAAAXp-3?format=jpg&name=medium"> </v-img>
            <h2><span>Series</span></h2>
            </router-link>
          </div>
        </v-col>
        <v-col cols="3">
          <div class="image">
             <router-link to="/stories">
            <v-img height="625px" src="https://i.pinimg.com/originals/ba/9b/d7/ba9bd7476d2c2581888cec2d1a6f45f4.jpg"> </v-img>
            <h2><span>Stories</span></h2>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>


<style scoped>
.image {
  position: relative;
  width: 100%; /* for IE 6 */
}

h2 {
  position: absolute;
  top: 500px;
  left: 0;
  width: 100%;
}
h2 span {
  color: #ED1D24;
  font: bold 44px/45px Helvetica, Sans-Serif;
  letter-spacing: -1px;
  background: rgb(0, 0, 0); /* fallback color */
  background: rgba(0, 0, 0, 0.7);
  padding: 10px 20px;
}
</style>