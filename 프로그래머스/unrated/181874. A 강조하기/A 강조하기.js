function solution(myString) {
    let answer = '';
    
    myString.split('').forEach(word => {
        if (word === 'a' || word === 'A') {
            answer += word.toUpperCase();
        } else { 
            answer += word.toLowerCase();   
        }
    });
    
    return answer;
}