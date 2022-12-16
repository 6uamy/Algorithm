function solution(s){
    var answer = true;

    const arr = s.toLowerCase();
    arr.split('').filter(x => x === 'p').length === 
        arr.split('').filter(x => x === 'y').length ? answer = true : answer = false;
    return answer;
}