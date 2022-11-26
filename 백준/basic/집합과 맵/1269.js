const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = input.shift().split(' ');

const A = new Set(input.shift().trim().split(' '));
const B = new Set(input.shift().trim().split(' '));

// 기존 풀이방법
const result = [];
A.forEach(item => {
  if(!B.has(item)) result.push(item);
});

B.forEach(item => {
  if(!A.has(item)) result.push(item);
});

console.log(result.length);

// 다른 풀이방법
const answer = new Set([...A, ...B]); // A와 B의 합집합을 만들어주어 교집합에 해당하는 부분을 삭제시킨다.

A.forEach(item => {
  if(B.has(item)) answer.delete(item);
});
console.log(answer.size);
