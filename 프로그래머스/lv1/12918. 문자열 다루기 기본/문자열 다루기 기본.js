function solution(s) {
    let answer = false;
    if (s.length === 4 || s.length === 6) {
        if (isNaN(s) === false) {
            s.includes('e') === true ? answer = false : answer = true;
        }
    }
    
    return answer;
}