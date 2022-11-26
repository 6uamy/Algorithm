const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const min = +input.shift();
const max = +input.shift();
let cnt = false;
let prime = [];

for(let i=min; i<=max; i++){ 
    for(let j=1; j<=i; j++){
        if(i % j === 0 && j != 1){
            if(j === i){
            cnt = true;   
            prime.push(j);
            }
            break;
        }
    }
}

if(cnt == false){
    console.log(-1);
} else{
    let result = prime.reduce((a, b) => a+b, 0);
    console.log(result);
    console.log(Math.min(...prime));
}
