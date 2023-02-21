function solution(n, m) {
    function gcd(num1, num2) {
        let r = num1 % num2;
        return num2 === 0 ? num1 : gcd(num2, r);
    }
    let answer = gcd(n, m);
    return [answer, (n * m) / answer];
}
