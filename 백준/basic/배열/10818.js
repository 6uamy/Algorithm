const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let count = +input[0];
let arr = input[1].split(' ').map(x=>Number(x)); // 배열의 원소를 각각 정수로 변환하여 mapping

let max = arr[0];
let min = arr[0];

for(let i=0; i<count; i++){
    if(max < arr[i]){
        max = arr[i];
    }
    if(min > arr[i]){
        min = arr[i];
    }
}

console.log(`${min} ${max}`);
