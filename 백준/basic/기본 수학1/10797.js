const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const day = Number(input.shift());
const carNum = input.shift().split(' ').map(x => Number(x));
let cnt = 0;

for (let i=0; i<carNum.length; i++) {
    if (carNum[i] === day) cnt++;
}

console.log(cnt);
