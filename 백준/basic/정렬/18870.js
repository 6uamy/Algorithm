const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, x] = input;
let arr = x.split(' ');
let result = [];
const set = [...new Set(arr)].sort((a, b) => a - b); // 중복 값 제거 후 오름차순 나열
let obj = {};

set.forEach((item, index) => obj[item] = index); // key-value 값으로 데이터 구분

for(let i=0; i<n; i++){
   result.push(obj[arr[i]]);
}
console.log(result.join(' '));
