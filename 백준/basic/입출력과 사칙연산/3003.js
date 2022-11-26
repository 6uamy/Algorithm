const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const chess = [1, 1, 2, 2, 2, 8];
const arr = [];
for (let i=0; i<input.length; i++){
    arr.push(chess[i] - input[i]);
}
console.log(arr.join(' ')); // join을 통해 원소를 연결하고 공백으로 구분
