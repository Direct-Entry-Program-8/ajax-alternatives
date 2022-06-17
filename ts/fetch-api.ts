import $ from 'jquery';
import {API_URL} from "./main";

$("#fth-get").on('click', ()=>{
    fetch(API_URL).then(response => {
       if (response.status === 200){
           return response.json();
       }
    }).then(json => {
       console.log(json);
    });
});

$("#fth-post").on('click', ()=>{
    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            title: "Something",
            body: "Hello Something",
            userId: 2
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.status === 201){
            return response.json();
        }
    }).then(json => {
       console.log(json);
    });
});