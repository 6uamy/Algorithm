function solution(s) {
    const answer = [];
    const arr = new Array(s.length).fill(-1);
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                arr[i] = i - j;
                break;
            }
        }
    }
    
    return arr;
}