function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridgeWeights = 0;
    let bridge = new Array(bridge_length).fill(0);

    while (bridge.length) {
        time++;
        bridgeWeights -= bridge.shift();

        if (truck_weights.length) {
            if (truck_weights[0] + bridgeWeights <= weight) {
                bridgeWeights += truck_weights[0];
                bridge.push(truck_weights.shift());
            } else bridge.push(0);
        }
    }
    return time;
}
