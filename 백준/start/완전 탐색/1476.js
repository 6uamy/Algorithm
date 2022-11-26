const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(x => Number(x));

let [e, s, m] = [...input];

let esm = function(e,s,m){
  let x = 1;
  while(1){    
    if(x%15 === (e-1) && x%28 === (s-1) && x%19 === (m-1))break;    
    x++;
  }
  return ++x;
}

console.log(esm(e, s, m));
