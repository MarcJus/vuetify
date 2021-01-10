import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import main from '../main'

Vue.use(axios, VueAxios);

export default {

    addProject(name, description, person, status, date){
        const params = new URLSearchParams();
        console.log(person instanceof Array);
        params.append("name", name);
        params.append("description", description);
        params.append("person", ["Marc", "Laurent"]);
        params.append("status", status);
        params.append("date", date);
        Vue.axios.post("http://"+main.local_adress+":3000/addProject", params).then((res) => {
            return res.data.success;
        });
    }

}