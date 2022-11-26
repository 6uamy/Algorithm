const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(x => Number(x));

const [r1, s] = input;

// r2= 2s - r1
console.log(2 * s - r1);
