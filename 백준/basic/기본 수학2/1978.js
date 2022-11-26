const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift();
let nums = input[0].split(' ');
let cnt = 0;

for(let i=0; i<testCase; i++){
    for(let j=1; j<=nums[i]; j++){
        if(nums[i] % j === 0 && j != 1){
            if(j === +nums[i]){
            cnt++;   
            }
            break;
        }
    }
}
console.log(cnt);
