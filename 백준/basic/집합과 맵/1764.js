const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input.shift().split(' ');

const noHear = new Set(input.slice(0, N));
const noSee = new Set(input.slice(N));

const result = [];
noSee.forEach(item => {
  if(noHear.has(item)) result.push(item);
})

result.sort();
console.log(`${result.length}\n${result.join('\n')}`);
