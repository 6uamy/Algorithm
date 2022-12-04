function solution(s) {
    let arr = [/zero/ig,/one/ig,/two/ig,/three/ig,/four/ig,/five/ig,/six/ig,/seven/ig,
              /eight/ig,/nine/ig];
    
    for (let i=0; i<10; i++) {
    let answer = s.replaceAll(arr[i],i);
        console.log(answer)
    s = answer;
    }
    return Number(s);
}