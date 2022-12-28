function solution(phone_number) {
    const newArr = [...phone_number];
    for (let i=0; i<phone_number.length-4;i++) {
        newArr[i] = '*';
    }
    
    
    return newArr.join('');
}