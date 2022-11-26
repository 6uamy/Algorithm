const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');

const testCase = input[0];
let nums, hotel = [];

for(let i=1; i<=testCase; i++){
    let weight = 1;
    let height = 1;
    hotel = [];
    nums = input[i].trim().split(' ');
    let guest = nums[2];
    let H = nums[0];
    let j = 0;

    while(j != guest){
        if(height <= H){
            if(weight / 10 < 1)
            {
                hotel.push( height + '0' + weight);  
                height++;
                j++;
            }else{
                hotel.push(String(height) + String(weight));  
                height++;
                j++;
            }
        }else{
            height = 1;
            weight++;
        }
        
    }   
    console.log(hotel[guest-1]);
}
