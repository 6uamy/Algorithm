function solution(absolutes, signs) {
    const newArr = [...absolutes];
    for (let i=0; i<absolutes.length; i++) {
        signs[i] === true ? newArr[i] : newArr[i] *= -1;
    }
    return newArr.reduce((arr, idx) => arr + idx, 0);
}