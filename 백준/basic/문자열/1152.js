// 내가 푼 문제 풀이
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const word = input.split(' ');

let cnt = 0;

for(let i=0; i<word.length; i++){
    if(word[i] != ''){
        cnt++;
    }
}
console.log(cnt);


// 다른 문제 풀이 방법

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const word = input.split(' ');
 
console.log(word[0] === "" ? 0 : word.length); // 빈 문자열이 들어올 경우의 예외 처리 방법
