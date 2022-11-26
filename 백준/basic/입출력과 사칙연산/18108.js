const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = +input;

console.log(input - 543);
