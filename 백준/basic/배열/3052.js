const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = input.split('\n');
let rem = count.map(x => x % 42);

const result = new Set(rem); // Set 객체를 통해 중복 값을 제거한 뒤 배열을 재구성 해준다.

console.log(result.size); // 중복 값이 제거된 배열의 사이즈를 출력
