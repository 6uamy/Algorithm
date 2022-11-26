const fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString();

input = input.split('\n');

let time = input[0].split(' ');

const H = +time[0];
const M = +time[1];
const timer = +input[1];

let timerHour = +(Math.floor((H * 60 + M + timer) / 60)); // 시간을 분으로 치환 (소수점 내림)
const timerMinute = +((H * 60 + M + timer) % 60); 

if(timerHour >= 24) { // 24시가 넘어갈 경우 0시부터 다시 시작하는 루틴
    timerHour -= 24;    
} 

console.log(`${timerHour} ${timerMinute}`);

