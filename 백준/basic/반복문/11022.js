const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const testCase = +input[0];
let answer = '';

for(let i=1; i<=testCase; i++) {
    let result = input[i].split(' ');
    let num1 = +result[0];
    let num2 = +result[1];
    answer = `Case #${i}: ${num1} + ${num2} = ${num1 + num2}`; 
    console.log(answer);
}
