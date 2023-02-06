const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, C] = input.shift().split(' ').map(Number);
const house = input.map(Number).sort((a, b)=>a-b);

// [ 1 2 4 8 9 ]
function isPossible(dist) { // 공유기 C개를 설치할 수 있는지 확인하는 함수
  let cnt = 1;
  let std = house[0];
  for(let i=1; i<=N; i++) { // 전체 집을 순회하면서 검사
    if(dist <= house[i] - std) { // 인접하는 최대 거리보다 길면
      cnt++; // 공유기 설치 가능
      std = house[i];
    }
  }
  return cnt >= C ? true:false;
}

function solution() {
  let left = 1;
  let right = house[N-1]-house[0]; 
  let mid;

  while(left <= right) {
    mid = parseInt((left+right)/2);
    if(isPossible(mid)) {
      left = mid + 1;
    } else right = mid - 1;
  }
  return right;
}

console.log(solution());