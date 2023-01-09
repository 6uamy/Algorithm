const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [aN, bN] = input.shift().split(' ');
const arrA = input.shift().trim().split(' ');
const arrB = input.shift().trim().split(' ');
const answer = [];

for (let i = 0; i < aN; i++) {
    answer.push(arrA[i]);
}
for (let i = 0; i < bN; i++) {
    answer.push(arrB[i]);
}

console.log(answer.sort((a, b) => a - b).join(' '));
