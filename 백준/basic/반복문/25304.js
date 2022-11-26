const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const X = +input[0];
const N = +input[1];

let product = [];
let sum = 0;
for(let i=2; i<=N+1; i++) {
    product = input[i].split(' ');
    sum += +product[0] * +product[1];
    
}

if(sum === X){
    console.log('Yes');
} else {
    console.log('No');
}
