const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split(' ');

const H = +input[0];
const M = +input[1];

if(M < 45) {
    if(H == 0) {
        console.log(`23 ${M+15}`);
    } else {
        console.log(`${H-1} ${M+15}`);
    }
} else {
    console.log(`${H} ${M-45}`);
}
