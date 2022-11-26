const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let count = +input[0];
let num = input[1];
let result = 0;

for(let i=0; i<count; i++){
    result += Number(num[i]); 
    
}
console.log(result);
