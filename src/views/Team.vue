<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container>
      <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg4 v-for="person in team" :key="person">
         <v-card class="text-center ma-3" width="300">
           <v-responsive class="pt-4">
             <v-avatar
              size="200"
              color="primary lighten-2"
            >
              <img :src="person.avatar" alt="alt">
            </v-avatar>
           </v-responsive>
           <v-card-text>
             <div class="subheading">{{person.name}}</div>
             <div class="grey--text">{{person.role}}</div>
           </v-card-text>
           <v-card-actions>
               <v-flex v-for="button in buttons" :key="button">
                <v-btn :color="button.color" outlined>
                  <v-icon small left>{{button.icon}}</v-icon>
                  <span>{{button.name}}</span>
                </v-btn>
              </v-flex>
           </v-card-actions>
         </v-card>
       </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
  data(){
    return{
      team: undefined,
      buttons: [
        {name: 'Message', icon: 'message', color: 'primary'},
        {name: 'Add Friend', icon: 'person_add', color: 'green'}
      ]
    }
  },
  mounted(){
    Vue.axios.get("http://192.168.0.26:3000/users")
    .then((res) => {
      this.team = res.data;
    });
  }
}
</script>