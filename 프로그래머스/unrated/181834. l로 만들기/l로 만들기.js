function solution(myString) {
    let answer = '';
    for (let i = 0; i < myString.length; i++) {
        myString[i] < 'l' ? answer += 'l' : answer += myString[i];
    }
    
    return answer;
}