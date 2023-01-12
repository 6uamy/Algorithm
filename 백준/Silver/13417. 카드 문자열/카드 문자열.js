const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input.shift();

for (let i = 0; i < testCase; i++) {
  const cardLength = +input.shift();
  const cardList = input.shift().trim().split(' ');
  const answer = [cardList.shift()];
  for (let j = 0; j < cardLength - 1; j++) {
    cardList[j] > answer[0] ? answer.push(cardList[j]) : answer.unshift(cardList[j]);
  }
  console.log(answer.join(''));
}
