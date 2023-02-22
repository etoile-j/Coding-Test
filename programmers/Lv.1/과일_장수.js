function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => a - b);
    while (score.length >= m) {
        let temp = score.splice(score.length - m, m);
        answer += temp[0] * m;
    }
    return answer;
}
