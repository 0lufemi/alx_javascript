#!/usr/bin/node

const request = require(`request`);
const process = require(`process`);

const id = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${id}`;

request.get(url, function(error, response, body) {
    // console.log(body);
    const bodyObject = JSON.parse(body);
    console.log(bodyObject.title);
});
