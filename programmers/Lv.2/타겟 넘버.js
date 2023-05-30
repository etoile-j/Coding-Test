function solution(numbers, target) {
    let answer = 0;

    function dfs(idx, sum) {
        if (idx === numbers.length) {
            if (target === sum) answer++;
        } else {
            dfs(idx + 1, sum + numbers[idx]);
            dfs(idx + 1, sum - numbers[idx]);
        }
    }

    dfs(0, 0);
    return answer;
}
