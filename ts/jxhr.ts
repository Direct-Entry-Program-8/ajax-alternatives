import $ from 'jquery';
import {API_URL} from "./main";

$("#jxhr-get").on('click', ()=>{
    $.ajax(API_URL).then((t, statusText, xhr) => {
        if (xhr.status === 200){
            console.log(t);
        }
    });
});

$("#jxhr-post").on('click', ()=>{
    $.ajax(API_URL, {
        method: 'POST',
        data: JSON.stringify({
            title: "Something",
            body: "Hello Something",
            userId: 2
        }),
        contentType: 'application/json'
    }).done(t => {
        console.log(t);
    });
});