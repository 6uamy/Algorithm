const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split(' '); 

const A = +input[0];
const B = +input[1];
console.log(A * B);
