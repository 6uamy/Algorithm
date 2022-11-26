const fs = require("fs");
let input = fs.readFileSync("/dev/stdin).toString().trim().split('');

let answer = "";
let stack = [];
let isTag = false;
let size = input.length + 1;

for (let i = 0; i < size; i++) {
  let word = input[i];

  if (word === " " && !stack.length) {
    answer += " ";
    continue;
  }

  if (word === " " && stack.length) {
    answer += stack.reverse().join("") + " ";
    stack = [];
    continue;
  }

  if (word === "<") {
    isTag = true;
    if (stack.length) {
      answer += stack.reverse().join("");
      stack = [];
    }
  }

  if (isTag) {
    answer += word;
  } else {
    stack.push(word);
  }

  if (word === ">") {
    isTag = false;
  }
}

if (stack.length) {
  answer += stack.reverse().join("");
}

console.log(answer.replace(/\n/g, ""));
