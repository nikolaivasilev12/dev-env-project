<template>
  <v-navigation-drawer app v-model="drawer" permanent>
    <v-card>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: "Characters", icon: "mdi-home-city" },
        { title: "Comics", icon: "mdi-account" },
        { title: "Something", icon: "mdi-account-group-outline" },
      ],
    };
  },
};
</script>