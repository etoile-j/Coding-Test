function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
        const int = Math.trunc(n / a);
        answer += int * b;
        n = n - a * int + int * b;
    }
    return answer;
}
