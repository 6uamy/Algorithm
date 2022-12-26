function solution(t, p) {
    const answer = [];
    for (let i = 0; i < t.length; i++) {
        const sliceStr = t.slice(i, i + p.length);
        if (sliceStr.length === p.length) answer.push(sliceStr);
    }
    
    return answer.filter(x => Number(x) <= Number(p)).length;
}