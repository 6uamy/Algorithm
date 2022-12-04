function solution(s) {
    const arr = s.split('', -1);
    let answer = '';
    let cnt = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === ' '){
            answer += ' ';
            cnt = 0;
        } else {
            if (cnt % 2 === 0) {
                answer += arr[i].toUpperCase();
                cnt++;
            } else {
                answer += arr[i].toLowerCase();
                cnt++;
            }
        }
        
    }
    
    return answer;
}