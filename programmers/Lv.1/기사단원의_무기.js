function solution(number, limit, power) {
    let answer = [];
    for (let i = 1; i <= number; i++) {
        let count = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                count++;
                if (i / j !== j) count++;
            }
        }
        answer.push(count);
    }
    const filtered = answer.filter((i) => i <= limit);
    if (filtered.length === number) {
        return filtered.reduce((a, b) => a + b);
    } else {
        return (
            filtered.reduce((a, b) => a + b) +
            (number - filtered.length) * power
        );
    }
}
