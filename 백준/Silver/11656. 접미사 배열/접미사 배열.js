const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function solution(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.slice(i));
    }

    return arr.sort().join('\n');
}

console.log(solution(input));
