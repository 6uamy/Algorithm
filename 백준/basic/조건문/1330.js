const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split(' ');

const A = +input[0];
const B = +input[1];

if(A > B) { // 10 2
    console.log('>');
} else if(A < B) { // 1 2
    console.log('<');
} else { // 5 5
    console.log('==');
}
