const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let answer = '';
for(let i=0; i<input; i++){
    answer += '*';
    console.log(answer);
}
