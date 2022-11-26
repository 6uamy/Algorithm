// 시간초과 error가 발생했던 code
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let up = +input[0];
let down = +input[1];
let height = +input[2];
let nowHeight = 0;
let day = 0;

while(true){
    nowHeight += up;
    if(nowHeight < height){
        nowHeight -= down;
        day++;
    } else{
        day++
        console.log(day);
        break;
    }
}
  
// 단순 반복문이 아닌 높이에서 하루에 올라갈 수 있는 높이를 나누어 day를 계산해주었다.
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let up = +input[0];
let down = +input[1];
let height = +input[2];

console.log(Math.ceil((height - down) / (up - down)));
