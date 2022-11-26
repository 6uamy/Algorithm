const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let i = 0;

while(true) {
    let result = input[i].split(' ');

    a = +result[0];
    b = +result[1];

    if(a==0 && b==0) {
        break;
    }
    console.log(a + b);
    i++;
}
