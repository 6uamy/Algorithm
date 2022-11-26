const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const card = new Set(input[1].split(' '));  
const targetCard = input[3].split(' ');
let result = [];
targetCard.forEach(item => {
  card.has(item) ? result.push(1) : result.push(0);
})

console.log(result.join(' '));
