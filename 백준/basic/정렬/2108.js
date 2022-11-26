const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(x => Number(x));

const testCase = input.shift();
let avr = 0;
let sorted = input.sort((a, b) => a - b);

const avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / testCase);

console.log(avg === -0 ? 0 : avg);
console.log(sorted[Math.floor(testCase / 2)]);

let max = 0;
mostAppearances = [];
let num = new Array(8001);
num.fill(0, 0, 8001);
for (let i = 0; i < testCase; i++) {
  if (sorted[i] < 0) {
    num[-(sorted[i]) + 4000]++;
  }
  else if (sorted[i] >= 0) {
    num[Number(sorted[i])]++;
  }
}
for (let i = 0; i < num.length; i++) {
  if (num[i] > max) max = num[i];
}

for (let i = 8000; i >= 4001; i--) {
  if (num[i] !== 0 && num[i] >= max) {
    mostAppearances.push(-(i - 4000));
  }
}
for (let i = 0; i <= 4000; i++) {
  if (num[i] !== 0 && num[i] >= max) {
    mostAppearances.push(i);
  }
}

if (mostAppearances.length === 1) console.log(mostAppearances[0]);
else if (mostAppearances.length >= 2) console.log(mostAppearances[1]);


console.log(Math.max(...sorted) - Math.min(...sorted));
