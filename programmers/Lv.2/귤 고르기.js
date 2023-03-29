function solution(k, tangerine) {
    const obj = tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    const values = Object.values(obj).sort((a, b) => b - a);
    let answer = 0;

    for (let i = 0; i < values.length; i++) {
        k -= values[i];
        answer++;
        if (k <= 0) return answer;
    }
}
