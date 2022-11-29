function isPrime(number) {
    for (let i=2; i<=Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    
    return true;
}

function solution(nums) {
    let answer = 0;
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
                const addNums = nums[i] + nums[j] + nums[k];
                if (isPrime(addNums)) answer++;
            }
        }
    }
    
    return answer;
}