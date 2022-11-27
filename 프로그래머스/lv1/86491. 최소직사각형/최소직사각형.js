function solution(sizes) {
    const max = [];
    const min = [];
    for (let i=0; i<sizes.length; i++) {
        sizes[i].sort((a, b) => a - b);
        max.push(sizes[i][0]);
        min.push(sizes[i][1]);
    }
    
    return Math.max(...max) * Math.max(...min);
}