import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(axios, VueAxios);

export default {

    addProject(name, description, person, status, date){
        Vue.axios.post("http://192.168.0.26:3000/addProject", {
            name: name,
            description: description,
            person: person,
            status: status,
            date: date
        }).then((res) => {
            return res.data.success;
        });
    }

}