const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let N = +input;
let result = 0;

function solution(n) {
    let count = 0;
    for(let i=1; i<=n; i++){
        let hun = Math.floor((i % 1000) / 100);
        let ten = Math.floor((i % 100) / 10);
        let one = i % 10;
        
        if(i < 100){
            count++;
        }else if(100 <= i && i < 1000) {
            if(hun - ten === ten - one) {
                count++;
            }
        }
    }
    return count;
}

console.log(solution(N));
