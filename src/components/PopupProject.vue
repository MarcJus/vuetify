<template>
  <div class="popup-project">
      <!-- <v-dialog
          v-model="dialog"
          persistent
          max-width="800px"
      > -->
        <!-- <template v-slot:activator="{on}"> -->
            <v-card flat class="mb-1" v-on="on">
                <v-layout row wrap :class="`pa-3 project ${status}`">
                    <v-flex lg6 xs12 md6>
                        <div class="caption grey--text">Title</div>
                        <div>{{name}}</div>
                    </v-flex>
                    <v-flex lg3 xs6 sm4 md2>
                        <div class="caption grey--text">Due By</div>
                        <div>{{dueBy()}}</div>
                    </v-flex>
                    <v-flex xs6 lg3>
                        <div class="caption grey--text">For</div>
                        <div>{{date}}</div>
                    </v-flex>
                </v-layout>
            </v-card>
        <!-- </template> -->
<!-- 
        <v-card @click="dialog = false">
            <v-card-title primary-title>
                <span class="headline">{{name}}</span>
            </v-card-title>
            <v-card-text>
                <div class="project-content">
                    <h3>Title</h3>
                    <span>{{description}}</span>
                </div>
            </v-card-text>
        </v-card> -->
        
      <!-- </v-dialog> -->
      
  </div>
</template>

<script>
export default {
    props: {
        name: String,
        description: String,
        date: String,
        status: String,
        team: Array,
    },
    methods: {
        dueBy(){
            let message = "";
            for(let i = 0; i < this.team.length; i++){
                if(i == this.team.length -1){
                    message += this.team[i]
                } else {
                    message += this.team[i]+", ";
                }
            }
            return message;
        }
    }
}
</script>

<style>
.project-content{
    margin-top: 10px;
}
</style>