const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(x => Number(x));

for (let i=1; i<=30; i++) {
	if (!input.includes(i)) console.log(i);
}
