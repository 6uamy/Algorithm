function solution(dartResult) {
    const newArr = dartResult.split('');
    const answer = [];
    
    for (let i=0; i<newArr.length; i++) {
        if (!isNaN(newArr[i])) {
            if (!isNaN(newArr[i+1])) {
                answer.push(10);
                i++;
            } else {
                answer.push(+newArr[i]);
            }
        }
        else {
            if (newArr[i] === 'D') 
                answer[answer.length-1] = Math.pow(answer[answer.length-1], 2); 
            if (newArr[i] === 'T')
                answer[answer.length-1] = Math.pow(answer[answer.length-1], 3);
            if (newArr[i] === '*') {
                answer[answer.length-1] *= 2;
                answer[answer.length-2] *= 2;
            }
            if (newArr[i] === '#') {
                answer[answer.length-1] *= -1;
            }
            
        }
    }
    
    return answer.reduce((a, b) => a + b, 0);
}