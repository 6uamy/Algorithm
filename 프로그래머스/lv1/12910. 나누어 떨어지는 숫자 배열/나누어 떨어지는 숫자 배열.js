function solution(arr, divisor) {
    const answer = arr.filter(x => x % divisor === 0);
    answer.length >= 1 ? answer.sort((a, b) => a - b) : answer.push(-1);
    return answer
}