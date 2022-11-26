const fs = require('fs');

let input = fs.readFileSync(0).toString(); 
// 원래는 이부분에 '/dev/stdin'으로 입력하였으나 런타임 에러가 발생해 0으로 적어주니 해결되었다.

input = input.split('\n');

const x = +input[0];
const y = +input[1];

if(x > 0 && y > 0) {
    console.log(1)
} else if(x < 0 && y > 0) {
    console.log(2)
} else if(x < 0 && y < 0) {
    console.log(3)
} else {
    console.log(4)
}
