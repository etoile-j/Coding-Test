function solution(n, words) {
    let answer = [];
    // 끝말
    for (let i = 0; i < words.length - 1; i++) {
        if (words[i].charAt(words[i].length - 1) !== words[i + 1].charAt()) {
            answer.push(i + 2);
            break;
        }
    }

    // 중복 찾기
    const filtered = words.filter((v, i) => words.indexOf(v) !== i);
    const sameWord = words.lastIndexOf(filtered[0]);
    if (sameWord > -1) answer.push(sameWord + 1);

    answer = answer.length === 0 ? 0 : Math.min(...answer);
    return [
        answer % n === 0 ? (answer === 0 ? 0 : n) : answer % n,
        Math.ceil(answer / n),
    ];
}
