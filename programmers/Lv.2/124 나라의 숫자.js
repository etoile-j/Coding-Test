function solution(n) {
    let answer = '';
    while (n / 3) {
        if (n % 3) {
            answer += n % 3;
            n = parseInt(n / 3);
        } else {
            answer += 4;
            n = parseInt(n / 3) - 1;
        }
    }
    return answer.split('').reverse().join('');
}

function solution2(n) {
    const nation = [4, 1, 2];
    let result = '';

    while (n) {
        result = nation[n % 3] + result;
        n = Math.floor((n - 1) / 3);
    }
    return result;
}
