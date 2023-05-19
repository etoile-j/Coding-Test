function solution(n, lost, reserve) {
    const deletedLost = lost
        .filter((num) => !reserve.includes(num))
        .sort((a, b) => a - b);
    const deletedReserve = reserve
        .filter((num) => !lost.includes(num))
        .sort((a, b) => a - b);

    for (let i = 0; i < deletedReserve.length; i++) {
        for (let j = 0; j < deletedLost.length; j++) {
            if (deletedReserve[i] + 1 === deletedLost[j]) {
                deletedReserve.splice(i, 1);
                i--;
                deletedLost.splice(j, 1);
                j--;
                break;
            } else if (deletedReserve[i] - 1 === deletedLost[j]) {
                deletedReserve.splice(i, 1);
                i--;
                deletedLost.splice(j, 1);
                j--;
                break;
            }
        }
    }
    return n - deletedLost.length;
}
