const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const testCase = +input[0];
let answer = '';

for(let i=1; i<=testCase; i++) {
    let result = input[i].split(' ');
    answer += `Case #${i}: ` + (+result[0] + +result[1]) + '\n'; 
}
console.log(answer);
