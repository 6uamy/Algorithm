const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const num = input.shift();
const command = input.map(x => x.trim());
const answer = [];
const result = [];

let top = -1;
for(let i=0; i<num; i++){
  if(command[i].includes('push')){
    const [com, num] = input[i].split(' ');
    answer.push(+num);
    top++;
  } else if(command[i] === 'top'){
    top >= 0 ? result.push(answer[top]) : result.push(-1);
  } else if(command[i] === 'size'){
    result.push(answer.length);
  } else if(command[i] === 'pop'){
    if(answer.length === 0){
      result.push(-1)
    } else{
      result.push(answer.pop());
      top--;
    } 
  } else if(command[i] === 'empty'){
    answer.length === 0 ? result.push(1) : result.push(0);
  }
}

console.log(result.join('\n'));
