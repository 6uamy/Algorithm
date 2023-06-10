function solution(numbers) {
    const num = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            num.push(numbers[i] + numbers[j]);
        }    
    }
    
    const result = [...new Set(num)].sort((a, b) => a - b);
    return result;
}