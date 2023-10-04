#!/usr/bin/node
const Rectangle = require('./4-rectangle');

// module.exports =
class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

const s1 = new Square(4);
console.log(s1);
console.log(s1.width);
console.log(s1.height);
