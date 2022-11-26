const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift();

let arr = [];
let answer = [];


for(let i=0; i<testCase; i++){
  const command = input[i].trim().split(' ');

  if(command[0] === 'push_front'){
    arr.unshift(command[1]);
  } else if(command[0] === 'push_back'){
    arr.push(command[1]);
  } else if(command[0] === 'pop_front'){
    arr.length === 0 ? answer.push(-1) : answer.push(arr.shift());
  } else if(command[0] === 'pop_back'){
    arr.length === 0 ? answer.push(-1) : answer.push(arr.pop());
  } else if(command[0] === 'size'){
    answer.push(arr.length);
  } else if(command[0] === 'empty'){
    arr.length === 0 ? answer.push(1) : answer.push(0);
  } else if(command[0] === 'front'){
    arr.length === 0 ? answer.push(-1) : answer.push(arr[0]);
  } else{
    arr.length === 0 ? answer.push(-1) : answer.push(arr[arr.length-1]);
  }
}

console.log(answer.join('\n'));
