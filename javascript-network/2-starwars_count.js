#!/usr/bin/node
const request = require(`request`);

const url = process.argv[2];

request.get(url, function(error, response, body) {
    const bodyObject = JSON.parse(body);
    let count = 0;
    bodyObject.results.forEach(function(actor) {
        if (actor.characters.includes(`https://swapi-api.alx-tools.com/api/people/18/`)) {
            count++;
        }
    });
    console.log(count);
});
