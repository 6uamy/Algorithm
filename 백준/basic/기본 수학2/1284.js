const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i=0; i<input.length-1; i++) {
    const arr = input[i].trim().split('').map(x => Number(x));
    let cnt = 2;

    arr.forEach(item => {
        if (item === 0) {
            cnt += 4;
        } else if (item === 1) {
            cnt += 2;
        } else {
            cnt += 3;
        }
    });
    
    console.log(cnt + arr.length-1);
}
