function solution(myString) {
    const arr = myString.split('x').map(x => x.length);
    
    return arr;
}