#!/usr/bin/node

const request = require(`request`);

const movieID = process.argv[2];
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(url, function(error, response, body) {
    const film = JSON.parse(body);
    // console.log(film.characters);
    
    film.characters.forEach(function(charURL) {
        // console.log(charURL);
        request.get(charURL, function(charErr, charResponse, charBody) {
            const char = JSON.parse(charBody);
            console.log(char.name);
        });
    });
});
