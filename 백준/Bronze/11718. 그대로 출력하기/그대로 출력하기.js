const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

console.log(input.join('\n'));
