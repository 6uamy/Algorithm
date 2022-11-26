function solution(arr) {
    const answer = [];
    arr.forEach(item => {
        if (answer[answer.length-1] !== item) answer.push(item);
    });
    
    return answer;
}