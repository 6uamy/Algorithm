const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [nums, cut] = input.shift().split(' ');

const sorted = input.shift().split(' ').sort((a, b) => b-a);

console.log(sorted[Number(cut) - 1]);
