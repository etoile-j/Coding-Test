const solution = (n, left, right) => {
    const answer = [];

    for (let i = left; i <= right; i++) {
        const y = parseInt(i / n);
        const x = i % n;
        answer.push(Math.max(y, x) + 1);
    }
    return answer;
};
