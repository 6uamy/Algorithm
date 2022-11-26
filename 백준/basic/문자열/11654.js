const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let result = input.charCodeAt();

console.log(result);
