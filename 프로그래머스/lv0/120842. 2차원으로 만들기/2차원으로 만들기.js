function solution(num_list, n) {
    const answer = [[]];
    const repeat = num_list.length / n;
    
    for (let i = 0; i < repeat; i++) {
        answer[i] = num_list.splice(0, n);
    }
    
    return answer;
}