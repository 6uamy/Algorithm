const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift();

const queue = [];
const answer = [];

for(let i=0; i<testCase; i++){
  const command = input[i].trim().split(' ');
  if(command[0] === 'push'){
    queue.push(command[1]);
  } else if(command[0] === 'pop'){
    queue.length === 0 ? answer.push(-1) : answer.push(queue.shift());
  } else if(command[0] === 'front'){
    queue.length === 0 ? answer.push(-1) : answer.push(queue[0]);  
  } else if(command[0] === 'size'){
    answer.push(queue.length);
  } else if(command[0] === 'empty'){
    queue.length === 0 ? answer.push(1) : answer.push(0);
  } else if(command[0] === 'back'){
    queue.length === 0 ? answer.push(-1) : answer.push(queue[queue.length-1]);
  }
}

console.log(answer.join('\n'));
