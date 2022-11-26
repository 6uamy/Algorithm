const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = +input[0];

for(let i=1; i<=testCase; i++){
    let count = 1;
    let score = 0;
    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'O'){
            score += count;
            count++;
        }else {
            count = 1;
        }
    }
    console.log(score);
}
