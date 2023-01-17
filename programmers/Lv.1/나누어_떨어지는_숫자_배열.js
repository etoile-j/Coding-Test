function solution(arr, divisor) {
    const answer = arr.filter((i) => i % divisor === 0).sort((a, b) => a - b);
    return answer.length === 0 ? [-1] : answer;
}
