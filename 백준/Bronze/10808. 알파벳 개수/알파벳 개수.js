const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('');

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const answer = new Array(26).fill(0);

input.forEach(word => {
    answer[alpha.indexOf(word)]++;
});

console.log(answer.join(' '));
