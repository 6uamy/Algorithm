const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let count = 2;

while(input !== 1){
    
    if(input / count === 1){
        console.log(count);
        break;
    } else{
        if(input % count === 0){
            input = Math.floor(input / count);
            console.log(count);
        } else{
            count++;
        }
    }
}
