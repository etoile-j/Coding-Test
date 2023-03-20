function solution(answers) {
    let answer = [];
    const pattern = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    for (let i = 0; i < 3; i++) {
        let score = 0;
        for (let j = 0; j < answers.length; j++) {
            if (pattern[i][j % pattern[i].length] === answers[j]) score++;
        }
        answer.push(score);
    }

    return answer
        .map((v, idx) => {
            if (Math.max(...answer) === v) return idx + 1;
        })
        .filter((v) => v > 0);
}
