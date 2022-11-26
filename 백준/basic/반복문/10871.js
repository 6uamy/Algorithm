const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const testCase = input[0].split(' ');

let N = +testCase[0];
let X = +testCase[1];

let A = input[1].split(' ');

let result = '';
for(let i=0; i<N; i++){
    if(A[i] < X) {
        result += A[i] + ' ';
    }
}
console.log(result);
