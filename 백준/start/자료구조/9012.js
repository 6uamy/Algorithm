const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const testCase = input.shift();

for(let i=0; i<testCase; i++){
    let cnt = 0;
    const vps = input[i].trim();
    for(let j=0; j<vps.length; j++){
        vps[j] === '(' ? cnt++ : cnt--;
        if(cnt < 0) break;
    }
    cnt === 0 ? console.log('YES') : console.log('NO');
}
