const fs = require("fs");
let input = fs.readFileSync("./index.txt").toString();

input = +input;

for(let i=1; i<10; i++){
    console.log(`${input} * ${i} = ${input * i}`);
}
