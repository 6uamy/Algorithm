const { count } = require("console");
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

const mulNum = String(input[0] * input[1] * input[2]);

for (let i = 0; i < 10; i++) {
    let cnt = 0;

    for (let j = 0; j < mulNum.length; j++) {
        if (Number(mulNum[j]) === i) cnt++;
    }

    console.log(cnt);
}
