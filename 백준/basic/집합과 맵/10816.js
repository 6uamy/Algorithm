const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const [N, M] = [+input[0], +input[2]];
const card = input[1].split(' ').map(x => +x);
const target = input[3].split(' ').map(x => +x);

const numKey = new Map();

card.forEach(key => {
  if(numKey.has(key)){
    numKey.set(key, numKey.get(key) + 1);
  } else{
    numKey.set(key, 1);
  }
});

const result = []
target.forEach(item => {
  numKey.has(item) ? result.push(numKey.get(item)) : result.push(0); 
})

console.log(result.join(' '));


