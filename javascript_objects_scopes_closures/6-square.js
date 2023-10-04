#!/usr/bin/node
const SquareBlueprint = require('./5-square');

module.exports =
class Square extends SquareBlueprint {
    constructor(size) {
        super(size);
    }

    charPrint(c = "X") {
        for(let i = 0; i < this.height; i++) {
            console.log(c.repeat(this.width));
        }
    }
}
