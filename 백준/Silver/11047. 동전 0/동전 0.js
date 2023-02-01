const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, k] = input.shift().trim().split(' ');
let answer = 0;

for (let i = n - 1; i >= 0; i--) {
  answer += Math.floor(k / input[i]);
  k %= input[i];
}

console.log(answer);
