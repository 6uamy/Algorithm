const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, m] = input.shift().split(' ');

const arr = input.shift().split(' ').map(x => +x);

let max = 0;

for(let i=0; i<n; i++){
   for(let j=0; j<n; j++){
      for(let k=0; k<n; k++){
         if(i == j || i == k || j == k) { // 같은 숫자는 더할 수 없으므로 같은 숫자가 있을 시 해당 경우의 수는 skip
            continue;
         }    
         let sum = arr[i] + arr[j] + arr[k];
         if(sum > max && sum <= m){
            max = sum;
         }
      }
   }
}
console.log(max);
