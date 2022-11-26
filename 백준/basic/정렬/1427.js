const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim();

let arr = [];

function result(){
    for(let i=0; i<input.length; i++){
    arr.push(input[i]);

}
return arr.sort((a, b) => b - a).join('');
}

console.log(result());

