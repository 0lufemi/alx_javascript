#!/usr/bin/node

const request = require(`request`);

const url = process.argv[2];

request.get(url, function(error, response, body) {
    const bodyObject = JSON.parse(body);
    // console.log(bodyObject);
    const completed = {};
    // let completed_count = 0;

    bodyObject.forEach(function(completed_userID) {
        if (completed_userID.completed) {
            // console.log(completed_userID.userId, ":", completed_userID.completed);
            // completed_count++;
            const userId = completed_userID.userId;
            completed[userId] = (completed[userId] || 0) + 1;
        }
    });
    console.log(completed);
    // console.log(completed_count);
});
