function solution(answers) {
    const [one, two, three] = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5],
                               [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let [result1, result2, result3] = [0, 0, 0];
    const answer = [];
    
    for (let i=0; i<answers.length; i++) {
        if (one[i % one.length] === answers[i]) result1++;
        if (two[i % two.length] === answers[i]) result2++;
        if (three[i % three.length] === answers[i]) result3++;
    }
    const mostAnswer = Math.max(result1, result2, result3);
    if (result1 === mostAnswer) answer.push(1);
    if (result2 === mostAnswer) answer.push(2);
    if (result3 === mostAnswer) answer.push(3);
    
    return answer.sort((a, b) => a - b);
}