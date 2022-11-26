const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split('\n');

const A = +input[0];
const B = +input[1];

const oneNum = B % 10;
const tenNum = Math.floor((B % 100/10)); // 385 % 100 = 85, 85 / 10 = 8.5, 내림
const hunNum = Math.floor(B / 100); // 385 / 100 = 3.85, 내림

console.log(A * oneNum);
console.log(A * tenNum);
console.log(A * hunNum);
console.log(A * B);
