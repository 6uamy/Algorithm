function solution(a, b, n) {
    let bottle = 0;
    while(n >= a) {
        const share = Math.floor(n / a);
        const remainder = n % a;
        bottle += share * b;
        n = (share * b) + remainder;
    }
    
    return bottle;
}