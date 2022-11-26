const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('');

let stack = [];
let cnt = 0;

for(let i=0; i<input.length; i++){
  if(input[i] === '('){
    stack.push('(');
  } else{
    stack.pop();
    if(input[i-1] === '('){
      cnt += stack.length;
    } else{
      cnt++;
    }
  }
}

console.log(cnt);
