<template>
  <div class="projects">
      <h1 class="subheading grey--text">Projects</h1>
      <v-container>
        <v-layout row wrap class="mb-4">
          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-btn small outlined color="green" v-on="on" @click="sortBy('title')" class="mr-2">
                <v-icon left small>folder</v-icon>
                <span class="caption text-lowercase">By project title</span>
              </v-btn>
            </template>
            <span>sort project</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{on}">
              <v-btn small outlined color="green" v-on="on" @click="sortBy('title')" class="mr-2">
                <v-icon left small>person</v-icon>
                <span class="caption text-lowercase">By name</span>
              </v-btn>
            </template>
            <span>sort person</span>
          </v-tooltip>
        </v-layout>
        <v-flex xs12 lg12 v-for="project in projects" :key="project.name">
          <PopupProject :name="project.name" :description="project.description" :team="project.person" :status="project.status" :date="project.date" />
        </v-flex>
      </v-container>
  </div>
</template>

<script>
import Vue from 'vue';
import PopupProject from '../components/PopupProject';

export default {
  data(){
    return{
      projects: undefined,
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
  mounted(){
    Vue.axios.get("http://192.168.0.50:3000/projects")
    .then((res) => {
      this.projects = res.data;
      console.log(this.projects[0].person instanceof Array);
    })
  },
  components: {
    PopupProject,
  }
}
</script>

<style>
.project.complete{
  border-left: 4px solid #3cd1c2;
}

.project.no{
  border-left: 4px solid orange;
}

.project.progress{
  border-left: 4px solid red;
}
</style>