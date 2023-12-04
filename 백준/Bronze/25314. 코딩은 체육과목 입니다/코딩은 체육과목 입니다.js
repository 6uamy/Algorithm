const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

console.log('long '.repeat(input / 4) + 'int');
