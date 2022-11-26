const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const fixCost = +input[0];
const varCost = +input[1];
const price = +input[2];

let breakPoint = Math.floor(fixCost / (price - varCost)) + 1;

console.log(varCost >= price ? -1 : breakPoint);
