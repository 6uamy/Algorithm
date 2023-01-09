const fs = require('fs');
let [item, ...array] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, M] = item.split(' ').map(x => +x);

arr = [];

for (i = 0; i < N; i++) {
    arr.push(array.shift().split(' ').map(x => +x));
}
K = array.shift();

for (i = 0; i < K; i++) {
    const [x1, y1, x2, y2] = array[i].split(' ').map(x => +x - 1);
    let sum = 0;
    for (j = x1; j < x2 + 1; j++) {
        for (z = y1; z < y2 + 1; z++) {
            sum += arr[j][z];
        }
    }
    console.log(sum);
}
