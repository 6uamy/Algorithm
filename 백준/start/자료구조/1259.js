const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
  let arr = input[i].trim().split('').reverse().join('');
  if(input[i].trim() === arr){
    console.log('yes');
  } else{
    console.log('no');
  }
}
