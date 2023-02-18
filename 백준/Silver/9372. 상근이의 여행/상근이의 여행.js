const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();

function solution() {
  let answer = '';
  for(let t=0; t<T; t++) {
    [N, M] = input.shift().split(' ').map(Number);
    airplane = input.splice(0, M);
    answer += `${N-1}\n`;
  }
  return answer;
}

console.log(solution());