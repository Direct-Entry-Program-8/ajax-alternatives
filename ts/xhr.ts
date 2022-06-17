import $ from 'jquery';
import {API_URL} from "./main";

$("#xhr-get").on('click', ()=> {

    const http = new XMLHttpRequest();

    http.onreadystatechange = ()=> {
        if (http.readyState === 4 && http.status === 200){
            console.log(JSON.parse(http.responseText));
        }
    };

    http.open('GET', API_URL, true);

    /* No headers to set here */

    http.send();

});

$("#xhr-post").on('click', ()=> {

    const http = new XMLHttpRequest();

    http.onreadystatechange = ()=> {
        if (http.readyState === 4 && http.status === 201){
            console.log(JSON.parse(http.responseText));
        }
    };

    http.open('POST', API_URL, true);

    http.setRequestHeader("Content-Type", "application/json");

    http.send(JSON.stringify({
        title: "Something",
        body: "Hello Something",
        userId: 2
    }));

});