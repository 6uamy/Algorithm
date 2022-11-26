const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const people = input.shift().split(' ').reduce((a, b) => a * b, 1);
const news = input.shift().split(' ').map(x => Number(x));
let result = '';

for (let i=0; i<news.length; i++) {
    result += (news[i] - people) + ' ';
}
console.log(result);
