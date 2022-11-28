function solution(numbers) {
    let addNumber = [];
    
    for (let i=0; i<numbers.length; i++) {
        for(let j=i+1; j<numbers.length; j++) {
            addNumber.push(numbers[i] + numbers[j]);
        }
    }
    
    const answer = [...new Set(addNumber)].sort((a, b) => a - b);
    return answer;
}