<template>
  <div>
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container light>
      <v-layout row wrap>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" elevation="10">
                  <v-icon dark>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Marc</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" elevation="10">
                  <v-icon dark>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Marc</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" elevation="10">
                  <v-icon dark>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Marc</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex sm6 xs12 md6 lg3>
          <v-card class="ma-3">
            <v-list-item>
              <v-list-item-avatar tile class="mt-n7">
                <v-sheet color="green" elevation="10">
                  <v-icon dark>store</v-icon>
                </v-sheet>
              </v-list-item-avatar>
              <v-list-item-content>
                <div class="text-right">Article</div>
                <v-list-item-title class="headline mb-1 text-right">523615</v-list-item-title>
                <div><v-divider></v-divider></div>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-icon text class="ma-2">person</v-icon>
              <div class="overline">Marc</div>
            </v-card-actions>
          </v-card>
        </v-flex>
        <!-- <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar
                size="100"
                color="primary lighten-2"
              >
                <img :src="person.avatar" alt="avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{person.name}}</div>
              <div class="grey--text">{{person.role}}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="red darken-2" outlined>
                <v-icon small left>message</v-icon>
                <span>Remove</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      // team: [
      //   {name: 'Marc', role: 'Web Developper', avatar: 'img1.png'},
      //   {name: 'Laurent', role: 'R&D', avatar: 'img1.png'}
      // ]
      team: undefined,
    }
  },
  mounted(){
    Vue.axios.get(Vue.axios.get("http://192.168.0.26:3000/users")
    .then((res) => {
        this.team = res.data;
    }));
  }
}
</script>
