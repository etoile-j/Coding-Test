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

function solution2(bridge_length, weight, truck_weights) {
    let time = 0,
        bridge = [[0, 0]], // [트럭 무게, 트럭이 다리를 빠져나가는 시간]
        bridgeWeights = 0;

    while (bridge.length > 0 || truck_weights.length > 0) {
        if (bridge[0][1] === time) bridgeWeights -= bridge.shift()[0];

        if (bridgeWeights + truck_weights[0] <= weight) {
            bridgeWeights += truck_weights[0];
            bridge.push([truck_weights.shift(), time + bridge_length]);
        } else {
            if (bridge[0]) time = bridge[0][1] - 1;
        }
        time++;
    }
    return time;
}
// 각 트럭이 다리를 건너는 데 걸리는 시간을 미리 계산해
// 다음 트럭이 당장 다리에 못 올라올 때 다리 건널 수 있는 시간으로 건너감
