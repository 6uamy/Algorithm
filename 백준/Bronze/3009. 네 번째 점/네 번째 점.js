const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let a = 0;
let b = 0;

for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(' ').map(x => +x);
    a ^= x;
    b ^= y;
}

console.log(a, b);
