const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('-');

let result = input.map((x) => {
    let cal = x.split('+');
    return cal.reduce((a, b) => Number(a) + Number(b), 0);
});

console.log(result.reduce((a, b) => a - b));
