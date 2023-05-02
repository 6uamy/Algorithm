const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

function solution(a) {
    const arr = a.map(x => +x);
    return arr.reduce((a, b) => a + b);
}

console.log(solution(input));
