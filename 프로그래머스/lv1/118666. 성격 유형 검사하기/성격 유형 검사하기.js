function solution(survey, choices) {
    const alpha = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    let mbti = new Map();
    let answer = '';
    
    alpha.forEach(word => {
       mbti.set(word, 0); 
    });
    
    for (let i = 0; i < survey.length; i++) {
        const [front, back] = survey[i].split('');
        if (choices[i] > 4) {
            mbti.set(back, mbti.get(back) + Math.abs(choices[i] - 4));
        } else if (choices[i] < 4) {
            mbti.set(front, mbti.get(front) + Math.abs(choices[i] - 4));
        }
    }
    
    answer += mbti.get('R') >= mbti.get('T') ? 'R' : 'T';
    answer += mbti.get('C') >= mbti.get('F') ? 'C' : 'F';
    answer += mbti.get('J') >= mbti.get('M') ? 'J' : 'M';
    answer += mbti.get('A') >= mbti.get('N') ? 'A' : 'N';
    
    return answer;
}