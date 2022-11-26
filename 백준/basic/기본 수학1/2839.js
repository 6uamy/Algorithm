const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;

while(true){
    if(input % 5 === 0){
        let kg = input / 5;
        if(kg < 0){
            console.log(-1);
            break;
        } else{
            console.log(kg + count);
            break;
        }
    }else{
        input -= 3;
        count++;
    }
}
