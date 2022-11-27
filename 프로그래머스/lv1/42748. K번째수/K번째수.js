function solution(array, commands) {
    const answer = [];
    commands.forEach(item => {
        const i = item[0];
        const j = item[1];
        const k = item[2];
        const sliceArr = array.slice(i-1, j).sort((a, b) => a - b);
        answer.push(sliceArr[k-1]);
    });
    
    return answer;
}