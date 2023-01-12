const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift();

for (let i = 0; i < n; i++) {
    const reverseStr = input[i].trim().split(' ').reverse().join(' ');
    console.log(`Case #${i+1}: ${reverseStr}`);
}
