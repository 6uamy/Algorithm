const fs = require("fs");
let input = fs.readFileSync("./index.txt").toString().trim().split(' ');

const [n,m] = input.map(x=>Number(x));
const arr = Array.from(Array(m+1).keys())
for(let i=2; i<=Math.sqrt(m); i++){
    if(arr[i]){
        for(let j = i*i; j<=m; j+=i)
        arr[j] = false;
    }
}
arr.splice(0,2,false,false)
for(let i = n; i<=m; i++){
    if(arr[i]){
      console.log(arr[i])
    }
}
