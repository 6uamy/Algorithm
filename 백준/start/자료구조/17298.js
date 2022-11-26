const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = Number(input.shift());
const arr = input.shift().split(' ').map(x => Number(x));
let tmp = [];
let result = new Array(testCase).fill(-1);

for (let i = 0; i < testCase; i++) {
  while (tmp.length && arr[tmp[tmp.length - 1]] < arr[i]) {
    result[tmp.pop()] = arr[i];
  }
  tmp.push(i);
}
console.log(result.join(" "));


/* arr = [3, 5, 2, 7]

   i = 0 일 때
   tmp.push(0); [0]

   i = 1 일 때
   arr[0] = 3 < arr[1] = 5
   tmp.pop() = 0, result[0] = arr[1] = [5(arr[0]), -1, -1, -1]
   tmp.push(1); [1]

   i = 2 일 때
   arr[1] < arr[2] 5 < 2 x 
   tmp.push(2); [1, 2]

   i = 3 일 때
   arr[1] < arr[3] 5 < 7
   result[2] = arr[3] = [5(arr[0]), -1, 7(arr[3]), -1]
   
   arr[2] < arr[3] 2 < 7
   result[1] = arr[3] = [5(arr[0]), 7(arr[1]), 7(arr[3]), -1]

   for문 종료

   result = [5, 7, 3, -1]
*/ 
