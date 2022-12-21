function solution(k, score) {
    const fame = [];
    const answer = [];
    for (let i = 0; i < score.length; i++) {
        if (i < k) {
            fame.push(score[i]);
            fame.sort((a, b) => b - a);
            answer.push(fame[fame.length - 1]);
        } else {
            fame.push(score[i]);
            fame.sort((a, b) => b - a);
            const hall = fame.slice(0, k);
            answer.push(hall[hall.length - 1]);   
        }
    }
    
    return answer;
}