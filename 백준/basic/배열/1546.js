const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let count = +input[0];
let score = input[1].split(' ').map(Number);

const max = Math.max(...score); // 배열의 최댓값
let average = 0;

for(let i=0; i<count; i++) {
    average += ((score[i] / max) * 100) / count; // 점수의 평균값을 누적
}
console.log(average);
