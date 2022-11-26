const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift();

for(let i=0; i<testCase; i++){
  const result = [];
  const word = input[i].trim().split(' ');
 for(let j=0; j<word.length; j++){
   result.push(word[j].split('').reverse().join(''));
 }
 console.log(result.join(' '))
}
