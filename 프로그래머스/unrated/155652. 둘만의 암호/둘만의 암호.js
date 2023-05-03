function solution(s, skip, index) {
    let answer = '';
    const alphabet = new Set('abcdefghijklmnopqrstuvwxyz');
    [...skip].forEach(val => alphabet.delete(val));

    const arr = [...alphabet];

    for (const a of s) {
        const idx = arr.indexOf(a) + index;
        answer += arr[idx % arr.length];
    }

    return answer;
}