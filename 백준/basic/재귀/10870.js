const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

function fibo(num) {
    if (num <= 1) {
        return num;
    }
    
    return fibo(num-2) + fibo(num-1);
}

console.log(fibo(input));
