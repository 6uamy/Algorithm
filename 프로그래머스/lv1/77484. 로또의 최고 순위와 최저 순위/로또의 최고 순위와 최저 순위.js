function solution(lottos, win_nums) {
    const answer = [];
    let match = 0;
    let nonVisible = 0;
    const winTable = {0: 6, 1: 6, 2: 5, 3: 4, 4: 3, 5: 2, 6: 1}
    
    lottos.forEach(num => {
        if (num === 0) nonVisible++;
        if (win_nums.includes(num)) match++
    });
    
    if (match === 0 && nonVisible === 6) {
        answer.push(1);
        answer.push(6);
    } else {
        answer.push(winTable[match + nonVisible]);
        answer.push(winTable[match]);
    }
    
    return answer;
}