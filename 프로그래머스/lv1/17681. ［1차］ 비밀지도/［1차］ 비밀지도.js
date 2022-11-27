function solution(n, arr1, arr2) {
    const arr1Key = arr1.map(x => x.toString(2).padStart(n, 0));
    const arr2Key = arr2.map(x => x.toString(2).padStart(n, 0));
    const answer = [];
    
    for (let i=0; i<n; i++) {
        let maze = ''
        for (let j=0; j<n; j++) {
            arr1Key[i][j] + arr2Key[i][j] > 0 ? maze += '#' : maze += ' ';
        }
        answer.push(maze);
    }
    
    return answer;
}