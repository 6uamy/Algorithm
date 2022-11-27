function solution(array, commands) {
    const answer = [];
    commands.forEach(item => {
        const [i, j, k] = item;
        const sliceArr = array.slice(i-1, j).sort((a, b) => a - b);
        answer.push(sliceArr[k-1]);
    });
    
    return answer;
}