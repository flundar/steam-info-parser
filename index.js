const axios = require('axios');
const FormData = require('form-data')
const { parse } = require('node-html-parser');

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
    .then(function (response) {
        var bilgi = parse(response.data)
        console.log(bilgi.querySelectorAll('#main > table:nth-child(3) > tbody > tr:nth-child(2) > td:nth-child(2)'))
    })
    .catch(function (error) {
        console.log(error);
    });