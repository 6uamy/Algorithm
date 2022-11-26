const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = +input;
let sum;
let i = 0;

while(true){
    i++;
    sum = Math.floor(N / 10) + N % 10; 
    N = (N % 10) * 10 + sum % 10;
    
    if(N === +input){    
        break;
    }
}
console.log(i);
