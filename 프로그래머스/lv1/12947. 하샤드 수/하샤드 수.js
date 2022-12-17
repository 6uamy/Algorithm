function solution(x) {
    var answer = true;
    const add = String(x).split('').reduce((a, b) => Number(a) + Number(b), 0);
    x % add === 0 ? answer = true : answer = false;
    return answer;
}