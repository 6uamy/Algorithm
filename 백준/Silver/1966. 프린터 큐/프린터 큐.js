const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, ...testcases] = input;
var numbers = [];

for (let i = 0; i < n; i++) {
  var count = 1;
  let location = Number(testcases[i * 2].split(' ')[1])
  let queue = testcases[i * 2 + 1].split(' ').map(Number);
  while (true) {
    const item = queue.shift();
    if (Math.max(...queue) <= item && location === 0) {
      console.log(count);
      break;
    } else if (Math.max(...queue) > item && location === 0) {
      queue.push(item);
      location = queue.length - 1;
    } else if (Math.max(...queue) > item) {
      queue.push(item);
      location -= 1;
    } else if (Math.max(...queue) <= item) {
      count += 1;
      location -= 1;
    }
  }
}