function solution(N, stages) {
/*   기존 풀이 방식  
     const answer = [];
     const result = [];
     let greeter = stages.length;
     for (let i=1; i<=N; i++) {
         let fail = 0;
         for (let j=0; j<stages.length; j++) {
             if (stages[j] <= i) {
                 stages[j] = N+1
                 fail++;
             }
         }
         answer.push(fail / greeter);
         greeter -= fail;
     }
  
     let cnt = 1;
     for (let i=0; i<answer.length; i++) {
         result.push([cnt, answer[i]]);
         cnt++;
     }
     result.sort((a, b) => b[1] - a[1]);
    
     return result.map(x => x[0]); */ 
    
    // filter 사용
    let result = [];
    for(let i=1; i<=N; i++){
        let reach = stages.filter((x) => x >= i).length;
        let curr = stages.filter((x) => x === i).length;
        result.push([i, curr/reach]);
    }
    result.sort((a,b) => b[1] - a[1]);
    return result.map((x) => x[0]);
}