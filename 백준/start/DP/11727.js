const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let memo = [...Array(1001)]
memo[0] = 1;
memo[1] = 3;

for(let i=2; i<memo.length; i++){
  memo[i] = (memo[i-1] + 2 * memo[i-2]) % 10007;
}

console.log(memo[input-1]);
