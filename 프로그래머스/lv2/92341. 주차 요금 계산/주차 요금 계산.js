function solution(fees, records) {
    const [basicTime, basicFee, perMin, perFee] = fees;
    let infoCar = {};
    let cumulTime = new Map();
    const answer = [];
    
    for (let i = 0; i < records.length; i++) {
        const [inOutTime, carNum, inOut] = records[i].split(' ');
        const [hh, mm] = inOutTime.split(':').map(Number);
        const times = (hh * 60) + mm;
        
        switch(inOut) {
            case 'IN':
                infoCar[carNum] = times;
                break;
            case 'OUT':
                cumulTime.set(carNum, cumulTime.get(carNum) === undefined 
                             ? times - infoCar[carNum]
                             : cumulTime.get(carNum) + (times - infoCar[carNum])
                );
                delete infoCar[carNum];
                break;
        }
    }
    
    for (let [key, value] of Object.entries(infoCar)) {
        cumulTime.set(key, cumulTime.get(key) === undefined 
                             ? 1439 - value
                             : cumulTime.get(key) + (1439 - value)
        );
    }
    
    [...cumulTime].sort((a, b) => a[0] - b[0])
                  .map(x => {
                        const howTime = x[1] - basicTime;
                        howTime > 0 ? answer.push(basicFee + Math.ceil(howTime / perMin) * perFee)
                                    : answer.push(basicFee)}
                      );
    
    return answer;
}