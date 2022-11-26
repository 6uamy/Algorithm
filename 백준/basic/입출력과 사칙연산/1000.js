let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().split(' '); // '/dev/stdin' 표준 입력장치의 값을 읽어 input에 저장

const A = +input[0]; // Number() 또는 parseInt() 사용도 가능하다.
const B = +input[1];

console.log(A + B); // 결과 출력
