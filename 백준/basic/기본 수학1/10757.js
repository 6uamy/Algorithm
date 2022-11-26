const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

let a = BigInt(input[0]); // js의 자료형에서 처리할 수 있는 수의 한계가 있기 때문에
let b = BigInt(input[1]); // BigInt를 통해 임의의 정밀도로 정수를 나타내야 한다.

const result = a + b;

console.log(result.toString());
