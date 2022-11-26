const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const [n, k] = [+input[0], +input[1]];

function solution(n, k) {
  if (k == 0 || n == k) {
    return 1;
  }

  return solution(n-1, k) + solution(n-1, k-1);
}

console.log(solution(n, k));
