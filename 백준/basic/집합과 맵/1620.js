const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const t = input.shift().split(' ');
const [N, M] = [+t[0], +t[1]];

const numKey = new Map(); // key-value 값으로 구성된 쌍 생성
const nameKey = new Map();

for(let i=0; i<N; i++){
    numKey.set(i + 1, input[i]); // 객체 set
    nameKey.set(input[i], i + 1);
}

const target = input.slice(N);

target.forEach(item => { // get으로 객체의 키에 해당하는 value를 가져온다.
  isNaN(item) ? console.log(nameKey.get(item)) : console.log(numKey.get(+item));
});

