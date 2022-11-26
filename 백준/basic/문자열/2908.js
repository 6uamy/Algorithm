const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b] = input.map(x => [...x].reverse().join('')); // reverse() 함수를 통해 문자열을 뒤집어 준뒤 join()을 통해 다시 이어줌

console.log(a > b ? a : b);
