const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const num = input.shift().split(' ');
const [N, M] = [+num[0], +num[1]];

const s = new Set(input.slice(0, N));
const target = input.slice(-M);
let cnt = 0;

target.forEach(item =>{
  if(s.has(item)) cnt++;
});

console.log(cnt);
