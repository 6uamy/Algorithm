const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input.shift();
let arr = input.sort();

arr.sort((a, b) => a.length - b.length);

// filter()와 indexOf()를 사용 한 방법
let result = arr.filter((v, i) => arr.indexOf(v) === i);

// ES6의 Set()을 사용한 방법
let result = [...new Set(arr)];

console.log(result.join('\n'));
