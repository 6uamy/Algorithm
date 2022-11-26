const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = +input[0];
let countGroupWord = 0;

for(let i=1; i<=testCase; i++){
    let word = input[i].trim();
    let result = [];
    let isGroupWord = true;
    
    for (let j = 0; j < word.length; j++) {
    if (result.indexOf(word[j]) === -1) { // result배열에 없는 문자일 경우 배열에 push
        result.push(word[j]);
        console.log(result);
    } else {
      if (result.indexOf(word[j]) !== result.length - 1) { // 마지막에 채워진 문자와 현재 문자의 중복 검사(연결된 문자가 맞는지 체크)
        isGroupWord = false;
        break;
      }
    }
  }
 
  if (isGroupWord) {
    countGroupWord += 1;
  }
}

console.log(countGroupWord);
