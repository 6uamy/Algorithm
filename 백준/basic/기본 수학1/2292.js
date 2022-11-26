const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let range = 1;
let beeBlock = 1;

while (beeBlock < input){
    beeBlock += range * 6;
    range++;
}

console.log(range);
