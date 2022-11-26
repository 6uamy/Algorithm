const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

const croalpa = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g; // 정규표현식 사용을 통한 문자조합을 검색
const result = input.replace(croalpa, ' '); // 검색된 문자열을 공백으로 처리하여 한 개의 문자열로 만들어준다.

console.log(result.length);
