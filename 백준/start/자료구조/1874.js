const fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().trim().split('\n');

const n = Number(input[0]);
const stack = [];
let pointer = 1;
let answer = '';

for (i = 1; i <= n; i++) {
  stack.push(i);
  answer += ('+ \n');
  
  while (stack[stack.length - 1] === Number(input[pointer])) {
    stack.pop();
    answer += ('- \n');
    pointer++;
  }
}

console.log(!stack.length ? answer.trim() : 'NO');
