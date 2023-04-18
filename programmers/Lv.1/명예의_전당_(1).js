function solution(k, score) {
    let answer = [];
    let fame = [];
    for (let i = 0; i < score.length; i++) {
        fame.push(score[i]);
        fame.sort((a, b) => a - b);
        if (fame.length < k) answer.push(fame[0]);
        else answer.push(fame[fame.length - k]);
    }
    return answer;
}
