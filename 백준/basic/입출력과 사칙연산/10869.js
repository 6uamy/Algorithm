const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split(' '); 

const A = +input[0];
const B = +input[1];

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B)); // Math.ceil(): 소수점 올림, Math.floor(): 소수점 내림, Math.round(): 소수점 반올림
console.log(A % B);
