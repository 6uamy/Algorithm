const fs = require('fs');

let input = fs.readFileSync('./index.txt').toString().trim().split('\n');

input.shift();
const sorted = input.sort((a, b) => a-b);

console.log(sorted.join('\n'));

// 기존 console.log를 통한 출력은 시간을 많이 잡아먹어 join()함수를 사용해 배열을 재정렬 한 뒤 출력을 진행하였다.
