function solution(hp) {
    const ant = [5, 3, 1];
    let answer = 0;
    ant.forEach(damage => {
       if (hp / damage >= 0) {
           answer += Math.floor(hp / damage);
           hp %= damage;
       } 
    });
    
    return answer;
}