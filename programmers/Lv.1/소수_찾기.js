function solution(n) {
    let answer = 1;
    for (let i = 3; i <= n; i++) {
        let check = true;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j === 0) {
                check = false;
                break;
            }
        }
        check ? answer++ : '';
    }
    return answer;
}
