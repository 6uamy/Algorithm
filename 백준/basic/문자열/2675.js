const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = +input[0];

for(let i=1; i<=testCase; i++){
    let result = '';
    
    // 문자열 정제 방법 1
    const test = input[i].trim().split(' ');
    let R = test[0];
    let S = test[1];
  
    // 문자열 정제 방법 2 (한번에 정제가 가능해서 다음부턴 이렇게 사용해야겠다.)
    const [R, S] = input[i].trim().split(' ');
  
    for(let j=0; j<S.length; j++){
        result += S[j].repeat(R);
      
    }
    console.log(result);
}
