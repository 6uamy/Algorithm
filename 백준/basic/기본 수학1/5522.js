const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(x => Number(x));

console.log(input.reduce((idx, cur) => idx += cur, 0));
