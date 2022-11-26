const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

for(let i=0; i<input.length-1; i++){
	const [a, b, c] = [...input[i].trim().split(' ').sort((a, b) => a - b).map(x => Number(x))];

	Math.pow(c, 2) === Math.pow(a, 2) + Math.pow(b, 2) ? console.log('right') : console.log('wrong');
}
