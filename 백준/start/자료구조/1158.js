const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(x => Number(x));

const arr = [];
const answer = [];

for(let i=1; i<=n; i++){
  arr.push(i);
}

let cnt = 1;

while(arr.length){
  const shift = arr.shift();
  if(cnt % k === 0){
    answer.push(shift); // k번째에 해당하는 숫자를 정답 배열에 push
  } else{
    arr.push(shift); // k번째가 아닌 숫자를 기존 배열 뒤에 push
  }
  cnt++;
}

console.log(`<${answer.join(', ')}>`);
