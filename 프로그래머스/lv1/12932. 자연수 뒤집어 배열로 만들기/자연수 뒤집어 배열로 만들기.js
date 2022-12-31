function solution(n) {
    var answer = [];
    
    answer = n.toString().split('').map(x => +x).reverse();
    
    return answer;
}