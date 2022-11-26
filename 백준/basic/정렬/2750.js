const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let testCase = +input.shift();

const sorted = input.sort((a, b) => a-b); 

for(let i=0; i<testCase; i++){
    console.log(sorted[i]);
}
