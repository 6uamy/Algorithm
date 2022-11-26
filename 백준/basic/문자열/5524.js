const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input[0];

for (let i=1; i<=testCase; i++) {
    console.log(input[i].toLowerCase());
}
