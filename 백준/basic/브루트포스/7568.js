const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const n = input.shift();
let students = input.map(x => x.split(' ').map(n => Number(n)));
const rank = [];

for(let i=0; i<n; i++){
   let cnt = 0;
   for(let j=0; j<n; j++){
      if(students[i][0] < students[j][0] &&
         students[i][1] < students[j][1]){   // 학생의 몸무게와 키를 비교하여 둘다 작을 경우 count를 증가 (순위 나열)
            cnt++;
         }
   }
   rank.push(cnt + 1); // 순위는 n명 + 1
}
console.log(rank.join(' '))
