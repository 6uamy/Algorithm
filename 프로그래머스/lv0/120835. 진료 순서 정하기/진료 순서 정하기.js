function solution(emergency) {
    const emergencyHigh = [...emergency].sort((a, b) => b - a);
    const answer = [];
    
    for (let i = 0; i < emergency.length; i++) {
        answer.push((emergencyHigh.indexOf(emergency[i])) + 1);
    }
    
    return answer;
}