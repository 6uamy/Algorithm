function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        let sASCII = s.charCodeAt(i);
        console.log(sASCII);
        if (sASCII >= 65 && sASCII <= 90) {
            sASCII += n;
            if (sASCII > 90) {
                sASCII -= 26;
            }
        } else if (sASCII >= 97 && sASCII <= 122) {
            sASCII += n;
            if (sASCII > 122) {
                sASCII -= 26;
            }
        }
        sString = String.fromCharCode(sASCII);
        answer += sString;
    }
    
    return answer;
}