const fs = require("fs");
let input = fs.readFileSync("/dev/stdin.txt").toString().trim();

let [A, B] = input.split(' ').map(x => +x);

function maxNum(){
  let num = 1;
  for(let i=2; i<=Math.min(A, B); i++){
    if(A % i === 0 && B % i === 0){
        num = i;
    }
  }
  return num;
} 

function minNum(){
  let num = 1;
   
  while(true){
    if((num % A == 0) && (num % B == 0)){
      break;
    }
    num++;
  }
  return num;
}

console.log(maxNum(A, B));
console.log(minNum(A, B));
