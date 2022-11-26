const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

let lStack = input[0].trim().split("");
let rStack = [];
let len = Number(input[1]);

for (let i = 2; i < 2 + len; i++) {
  let [cmd, value] = input[i].trim().split(" ");
  if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
  else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
  else if (cmd === "B") lStack.pop();
  else if (cmd === "P") lStack.push(value);
}

let answer = lStack.join("");
answer += rStack.reverse().join("");
console.log(answer);
