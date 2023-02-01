const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let changeMoney = 1000 - input;
const wallet = [500, 100, 50, 10, 5, 1];
const answer = [];

for (let i = 0; i < wallet.length; i++) {
  answer.push(Math.floor(changeMoney / wallet[i]));
  changeMoney %= wallet[i];
}

console.log(answer.reduce((a, b) => a + b, 0));
