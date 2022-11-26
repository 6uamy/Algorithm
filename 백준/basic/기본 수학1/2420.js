const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(x => Number(x));

let [n, m] = input;

console.log(Math.abs(n - m));
