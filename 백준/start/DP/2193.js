const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let memo = [...Array(input+1)];

memo[1] = 1;
memo[2] = 1;

for(let i=3; i<=input; i++){
  memo[i] = BigInt(memo[i-1]) + BigInt(memo[i-2]);
}

console.log(memo[input].toString());
