function solution(age) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    let answer = '';
    const arr = String(age).split('').map(Number);
    
    arr.forEach(num => {
        answer += alpha[num]; 
    });
    
    return answer;
}