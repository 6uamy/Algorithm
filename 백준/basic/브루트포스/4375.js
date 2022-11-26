const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

function solution(n){
   let temp = 1;
   let cnt = 1;
   while(true){
      if(temp % n === 0){
         return cnt;
      }else{
         temp = temp * 10 + 1;
         temp = temp % n;
         cnt++;
      }
   }
}

for(let i=0; i<input.length;i++){
   let answer = solution(input[i])
   console.log(answer.toString());
}
   
