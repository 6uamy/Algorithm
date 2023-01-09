const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const newArr = [...input[1].split(' '), ...input[2].split(' ')];

console.log(newArr.sort((a, b) => a - b).join(' '));
