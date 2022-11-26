const fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().trim();

let memo = new Array(1001).fill(0);
memo[0] = 1;
memo[1] = 2;

for(let i=2; i<memo.length; i++){
  memo[i] = (memo[i-1] + memo[i-2]) % 10007;
}

console.log(memo[input-1]);
