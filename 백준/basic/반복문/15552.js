const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const testCase = +input[0];
let answer = '';

for(let i=1; i<=testCase; i++) {
    let result = input[i].split(' ');
    answer += +result[0] + +result[1] + '\n';
  // for문을 통해 하나씩 출력을 하면 시간 초과라는 결과를 얻어 문자열에 결과값과 '\n'을 넣어 마지막에 출력하였다.
}

console.log(answer);
