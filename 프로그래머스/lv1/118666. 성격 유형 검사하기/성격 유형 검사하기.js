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
            switch(choices[i]) {
                case 5:
                    mbti.set(back, mbti.get(back) + 1);
                    break;
                case 6:
                    mbti.set(back, mbti.get(back) + 2);
                    break;
                case 7:
                mbti.set(back, mbti.get(back) + 3);
                break;
                    
            }
        } else if (choices[i] < 4) {
            switch(choices[i]) {
                case 3:
                    mbti.set(front, mbti.get(front) + 1);
                    break;
                case 2:
                    mbti.set(front, mbti.get(front) + 2);
                    break;
                case 1:
                mbti.set(front, mbti.get(front) + 3);
                break;
                    
            }
        }
    }
    
    answer += mbti.get('R') >= mbti.get('T') ? 'R' : 'T';
    answer += mbti.get('C') >= mbti.get('F') ? 'C' : 'F';
    answer += mbti.get('J') >= mbti.get('M') ? 'J' : 'M';
    answer += mbti.get('A') >= mbti.get('N') ? 'A' : 'N';
    
    return answer;
}