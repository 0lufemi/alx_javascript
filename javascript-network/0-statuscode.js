#!/usr/bin/node
const request = require('request');
const process = require('process');

const url = process.argv[2];

request.get(url, function (error, response, body) {
  console.log('code: ', response.statusCode);
});
