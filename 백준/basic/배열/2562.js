const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = input.split('\n').map(x=>Number(x));
let max = count[0];

for(let i=0; i<count.length; i++){
    if(max < count[i]) max = count[i];
}
console.log(max);
console.log(count.indexOf(max) + 1); // 해당 요소가 있는 배열의 위치를 return 해준다. (없을 시 -1)
