const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n'); 
// 문자열 공백처리를 해주어야 오답처리가 해결되었다.

for(let i=0; i<input.length; i++) {
    let result = input[i].split(' ');

    console.log(+result[0] + +result[1]);
}
