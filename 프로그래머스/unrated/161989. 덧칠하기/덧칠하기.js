function solution(n, m, section) {
    let answer = 0;
    let part = 0;
    
    section.forEach(item => {
        if (item > part) {
            part = item + m - 1;
            answer++;  
        }
    });
    
    return answer;
}