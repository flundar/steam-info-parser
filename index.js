const axios = require('axios');
const FormData = require('form-data')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


var bodyFormData = new FormData();
bodyFormData.append('qsearch', 'flundar');

axios({
        method: "post",
        url: "http://www.vacbanned.com/engine/check",
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        },
    })
    .then(async function (response) {
        var bilgi = new JSDOM(response.data);
        console.log(bilgi.window.document.querySelector('#main > table:nth-child(3) > tbody > tr:nth-child(4) > td:nth-child(2)').textContent);
    })
    .catch(function (error) {
        console.log(error);
    });



