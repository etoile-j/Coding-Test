function solution(s) {
    let answer = 0;
    let x = 0;
    let str = s[0];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === str) x++;
        else x--;
        if (x === 0) {
            answer++;
            str = s[i + 1];
        }
    }
    return x === 0 ? answer : answer + 1;
}
