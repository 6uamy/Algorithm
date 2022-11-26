function solution(n, m) {
    const answer = [];
    const arr = [];
    
    for (let i=1; i<=m; i++) {
        if (m % i === 0 && n % i === 0) arr.push(i);
    }
    answer.push(Math.max(...arr));
    answer.push((n * m) / answer[0]);
    
    return answer;
}