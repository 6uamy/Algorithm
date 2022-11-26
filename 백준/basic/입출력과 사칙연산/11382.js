const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(x => Number(x));

console.log(input.reduce((a, b) => a+b, 0)); // 단순히 더하는 것이 아닌 reduce 함수를 통한 문자원소의 더한 값을 리턴
