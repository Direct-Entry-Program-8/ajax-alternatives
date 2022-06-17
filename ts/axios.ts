import $ from 'jquery';
import {API_URL} from "./main";
import axios from 'axios';

$("#axs-get").on('click', ()=>{
   axios.get(API_URL).then(res => console.log(res.data));
});

$("#axs-post").on('click', ()=>{
    axios.post(API_URL, {
        title: "Something",
        body: "Hello Something",
        userId: 2
    }).then(res => console.log(res.data));
});