const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
    const answer = [];
    for (let i = 0; i < str.length; i++) {
        answer.push(i);
    }

    return answer.join('\n');
}

console.log(solution(input));
