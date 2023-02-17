function solution(left, right) {
    let odd = 0;
    let even = 0;
    for (let i = left; i <= right; i++) {
        let count = 1;
        for (let j = 1; j < i; j++) {
            if (i % j === 0) count++;
        }
        count % 2 === 0 ? (even += i) : (odd += i);
    }
    return even - odd;
}

function solution2(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
// 제곱근이 정수면, 약수의 갯수는 홀수다.
