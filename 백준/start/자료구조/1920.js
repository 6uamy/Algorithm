const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = [input[0], input[2]];

const narr = new Set(input[1].trim().split(' '));
const marr = input[3].trim().split(' ');

const answer = [];

marr.forEach(x =>{
  narr.has(x) ? answer.push(1) : answer.push(0);
});

console.log(answer.join('\n'));
