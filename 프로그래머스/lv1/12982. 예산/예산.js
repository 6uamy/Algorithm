function solution(d, budget) {
    let cost = 0;
    let cnt = 0;
    const newArr = d.sort((a, b) => a - b);
    
    while(budget > 0) {
        budget -= newArr[cost];
        cost++;
        cnt++;
    }
    
    return budget >= 0 ? cnt : cnt - 1;
}