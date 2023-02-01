function solution(d, budget) {
    if (d.reduce((p, c) => p + c) <= budget) {
        return d.length;
    } else {
        let count = 0;
        d.sort((a, b) => a - b);
        for (let i = 0; i < d.length; i++) {
            if (budget - d[i] > -1) {
                budget -= d[i];
                count++;
            }
        }
        return count;
    }
}
