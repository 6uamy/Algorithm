const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input.shift();

let arr = input.map(x => x.split(' '));

arr.sort((a, b) => {
   if(a[0] === b[0]){
    return a[1] - b[1];
   }else{
    return a[0] - b[0];
   }
});

console.log(arr.map(x => x.join(' ')).join('\n'));  
