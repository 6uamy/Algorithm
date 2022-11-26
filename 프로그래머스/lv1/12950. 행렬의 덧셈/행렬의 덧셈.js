function solution(arr1, arr2) {
    const newArr = [...arr1];
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr1[i].length; j++) {
            newArr[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return newArr;
}