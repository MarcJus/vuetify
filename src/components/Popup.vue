<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent 
        max-width="800px"
    >
      <template v-slot:activator="{ on }">
          <v-btn outlined color="green lighten-1" v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
          <v-card-title primary-title>
              <span class="headline">New Project</span>
          </v-card-title>
          <v-form class="px-3" ref="form">
              <v-card-text>
                  <v-text-field label="Title" v-model="title" color="blue darken-1" :rules="rules.nameRules" prepend-icon="folder" required></v-text-field>
                  <v-textarea label="Information" v-model="content" prepend-icon="edit" color="blue darken-1"></v-textarea>
                  <v-layout row wrap>
                      <v-flex xs12 lg6>
                          <v-menu
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="290px"
                            min-width="290px"
                        >
                            <template v-slot:activator="{on}">
                                <v-text-field
                                    label="Date"
                                    hint="MM/DD/YYY format"
                                    v-model="dateFormatted"
                                    prepend-icon="event"
                                    @blur="date = parseDate(dateFormatted)"
                                    v-on="on"
                                    color="blue darken-1"
                                ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                        </v-menu>
                      </v-flex>
                      <v-spacer></v-spacer>
                      <v-flex xs12 lg4>
                          <v-select
                            v-model="select"
                            :items="person"
                            label="Persons"
                            chips
                            flat
                            :hint="!this.selectValid ? 'You must select a person' : null"
                            persistent-hint
                            multiple
                            color="blue darken-4"
                            solo
                        ></v-select>
                      </v-flex>
                  </v-layout>
              </v-card-text>
              <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false; resetDialog()">Close</v-btn>
                  <v-btn color="green" text outlined @click="validate()">Save</v-btn>
              </v-card-actions>
          </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Vue from 'vue';

export default {
    data: vm => ({
        dialog: false,
        title: '',
        content: '',
        select: '',
        date: new Date().toDateString().substring(0, 10),
        dateFormatted: vm.formatDate(new Date().toISOString().substring(0, 10)),
        menu1: false,
        menu2: false,
        rules: {
            nameRules: [
                v => !!v || 'Name is required',
            ],
        },
        person: undefined,
        selectValid: true,
    }),
    methods: {
        formatDate(date){
            if(!date) return null;
            const [year, month, day] = date.split('-');
            return `${day}/${month}/${year}`
        },
        parseDate(date){
            if(!date) return null;
            const [year, month, day] = date.split('/');
            return `${day.padStart(2, '0')}-${month.padStart(2, '0')}-${year}`
        },
        validate(){
            if(this.$refs.form.validate() && this.selectValid){
                // Vue.axios.post("http://192.168.0.26:3000/addProject", {
                //     name: this.title,
                //     description: this.content,
                //     person: personList,
                //     status: "progress",
                //     date: this.dateFormatted
                // }).then((res) => {
                //     console.log(res.data.success);
                // });
                Vue.axios.get("http://192.168.0.26:3000/addProject")
                .then((res) => {
                    console.log(res.data);
                });
                this.dialog = false;
                this.resetDialog();
                let personList = [];
                for(let i = 0; i < this.select.length; i++){
                    personList.push(this.select[i]);
                }
            }
        },
        resetDialog(){
            this.$refs.form.reset();
            this.content = "";
            this.selectValid = true;
        }
    },
    computed: {
        computedDateFormatted(){
            return this.formatDate(this.date);
        }
    },
    watch: {
        date(){
            this.dateFormatted = this.formatDate(this.date);
        }
    },
    mounted(){
        Vue.axios.get("http://192.168.0.26:3000/getNames")
        .then((res) => {
            var data = res.data;
            this.person = new Array();
            data.forEach(element => {
                this.person.unshift(element.name);
            });
        });
    }
}
</script>

<style>

</style>