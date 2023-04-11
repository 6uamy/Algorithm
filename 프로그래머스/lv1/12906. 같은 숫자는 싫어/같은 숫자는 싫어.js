function solution(arr) {
    const answer = [];
    arr.forEach(item => {
       if (item !== answer[answer.length - 1]) answer.push(item);
    });
    return answer;
}