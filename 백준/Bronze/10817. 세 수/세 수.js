const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(' ');

function solution(a) {
    const arr = a.map(x => +x).sort((a, b) => a - b);
    return arr[1];
}

console.log(solution(input));
