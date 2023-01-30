const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = +input.shift();

for(let i=0; i<testCase; i++){  
    const floor = +input.shift();
    const row = +input.shift();
    const apart = [];

    for(let i=0; i<=floor; i++){
        apart.push([1]);
        for(let j=1; j<row; j++){
            if(i === 0){
                apart[i].push(j+1);
            }else{
                apart[i].push(apart[i][j-1] + apart[i-1][j]);
            }
        }
    }

    console.log(apart[floor][row-1]);
}
