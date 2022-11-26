const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i=1; i<=Number(input[0]); i++) {
    let sum = 0;
    let cnt = 0; 

    let testCase = input[i].split(' ').map(Number);
    let students = testCase[0];
    for(let j=1; j<=students; j++){
        sum += testCase[j];         // 학생들의 점수 합산
    }  
    let avr = sum / students; // 학생들의 평균

    for(let k=1; k<=students; k++){
        if(testCase[k] > avr){  
            cnt++; // 평균 점수 이상의 학생 수
        }   
    }
    let result = ((cnt / students) * 100).toFixed(3); // toFixed(N의 자리) 고정소수점 출력(반올림 계산)
    console.log(`${result}%`);
}



