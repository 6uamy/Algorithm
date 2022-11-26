const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let n = 1;
let result = 0;

while(true){
   let t = n.toString();
   for(let i=0; i<t.length; i++){
      result += Number(t[i]);
   }
   result += n;
   if(result === Number(input)){
      break;
   } else{
      if(n >= input){
         n = 0;
         break;
      }
      n++;
      result = 0;
   }
}

console.log(n);
