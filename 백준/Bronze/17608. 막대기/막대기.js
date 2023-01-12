const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => +x);

const n = input.shift();
let top = input.pop();
let answer = 1;

for (let i = input.length - 1; i >= 0; i--) {
  if (input[i] > top) {
    top = input[i];
    answer++;
  }
}

console.log(answer);
