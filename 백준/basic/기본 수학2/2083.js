const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i=0; i<input.length-1; i++) {
    const [name, age, height] = input[i].split(' ');

    if (age > 17 || height >= 80) {
        console.log(`${name} Senior`);
    } else {
        console.log(`${name} Junior`);
    }
}
