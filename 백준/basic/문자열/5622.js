const fs = require('fs');

let input = fs.readFileSync('./index.txt').toString().trim();

let nums = {
	2: 'ABC',
	3: 'DEF',
	4: 'GHI',
	5: 'JKL',
	6: 'MNO',
	7: 'PQRS',
	8: 'TUV',
	9: 'WXYZ',
};

let result = 0;

for(let i=0; i<input.length; i++){
    for(let j=2; j<=9; j++){
        if(nums[j].includes(input[i])){ // 객체에 문자열이 포함되었는지 확인해준다.
            result += j + 1;
        }
    }
}

console.log(result);
