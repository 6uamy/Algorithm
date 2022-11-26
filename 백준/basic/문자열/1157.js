const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().toLowerCase();
let word = new Array(26).fill(0); // 알파벳 a~z 까지의 배열을 0으로 초기화시켜준다.
let cnt = 0;

for(let i=0; i<input.length; i++){
    word[input.charCodeAt(i) - 97] ++; // 해당 알파벳이 위치한 위치의 카운트를 증가시켜준다.(중복값 및 소문자)
}

const max = Math.max(...word);
const index = word.indexOf(max);

for(let j=0; j<26; j++){
    if(word[j] === max){
        cnt++;
    }
}
console.log(cnt > 1 ? '?' : String.fromCharCode(index + 65));
// 중복이 있을경우 '?'를 중복이 없을경우 해당위치의 ascii코드를 대문자로 출력시켜준다.  
