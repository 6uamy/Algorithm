function solution(bridge_length, weight, truck_weights) {
    const bridge = Array.from({ length: bridge_length }, () => 0);
    let curWeight = 0;
    let time = 0;
    while (truck_weights.length) {
        time++;
        curWeight -= bridge.shift();
        if (curWeight + truck_weights[0] > weight) {
            bridge.push(0);
        } else {
            const curTruck = truck_weights.shift();
            bridge.push(curTruck);
            curWeight += curTruck;
        }
    }
    return time + bridge_length;
}