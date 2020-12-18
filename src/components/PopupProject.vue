<template>
  <div class="popup-project">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="800px"
      >
        <v-card flat class="mb-1" v-slot:activator="{on}">
            <v-layout row wrap :class="`pa-3 project ${status}`">
                <v-flex lg6 xs12 md6>
                    <div class="caption grey--text">Name</div>
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
      </v-dialog>
      
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
    data(){
        return{
            dialog: false,
        }
    },
    methods: {
        dueBy(){
            var message = "";
            for(var i = 0; i < this.team.length; i++){
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

</style>