function solution(emergency) {
    const emergencyHigh = [...emergency].sort((a, b) => b - a);
    
    return emergency.map(x => emergencyHigh.indexOf(x) + 1);
}