function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    let box = 0;
    for (let i = 0; i < Math.floor(score.length / m); i++) {
        const sliceScore = score.slice(box, box + m);
        answer += Math.min(...sliceScore) * m;
        box += m;
    }
    
    return answer;
}