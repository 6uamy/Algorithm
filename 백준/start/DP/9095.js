const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(x => Number(x));

const testCase = input.shift();

let memo = [...Array(11)].fill(0);

memo[1] = 1;
memo[2] = 2;
memo[3] = 4;
for(let i=0; i<testCase; i++){
  for(let j=4;j<=input[i]; j++){
    memo[j] = memo[j-1] + memo[j-2] + memo[j-3];
  }
  console.log(memo[input[i]]);
}
