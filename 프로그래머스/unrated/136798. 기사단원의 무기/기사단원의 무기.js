function solution(number, limit, power) {
    const answer = [];
    
    for (let i = 1; i <= number; i++) {
        let measure = 0;
        for (let j = 1; j <= i / 2; j++) {
            if (i % j === 0) measure++;
        }
        measure + 1 > limit ? answer.push(power) : answer.push(measure + 1);
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}