const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
    const arr = [];
    const answer = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(0, i + 1));
    }

    arr.forEach(item => {
        answer.push(arr.indexOf(item));
    });

    return answer.join('\n');
}

console.log(solution(input));
