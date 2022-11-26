const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let cnt = Number(input);
let num = 665;

while(true){
  
  // num.toString().includes('666')
  if(num.toString().indexOf('666') === -1){ // 이 부분을 처음에는 includes함수에 익숙하지 않아 사용하지 않았지만
  } else{                                   // includes함수를 사용해 true/false 값을 통한 구현이 더 효율적인 것 같다. 
    cnt--;
    if(cnt === 0){
      break;
    } 
  }
  num++;
}

console.log(num);
