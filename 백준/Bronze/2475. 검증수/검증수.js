const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ').map(x => Math.pow(x, 2));

const answer = input.reduce((a, b) => a + b) % 10;

console.log(answer);
