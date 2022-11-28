function solution(a, b) {
    var answer = '';
    let cnt = 0;
    const [m, d] = [1, 1];
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let i=0; i<=a-m; i++) {
        cnt += days[i];
    }
    cnt -= days[a-1] - (b-1);

    return day[cnt % 7];
}