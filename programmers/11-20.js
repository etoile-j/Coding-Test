//11. 최빈값 구하기
function solution1(array) {
    const counts = array.reduce((p, c) => {
        p[c] = (p[c] || 0) + 1;
        return p;
    }, {});

    const keys = Object.keys(counts);
    const values = Object.values(counts);
    const max = Math.max(...values);
    if (values.indexOf(max) !== values.lastIndexOf(max)) {
        return -1;
    } else {
        return parseInt(keys[values.indexOf(max)]);
    }
}

//12. 짝수는 싫어요
function solution2(n) {
    var answer = [];
    for (let i = 1; i <= n; i += 2) {
        answer.push(i);
    }
    return answer;
}

// Day 4. 수학, 배열
//13. 피자 나눠 먹기 (1)
function solution3(n) {
    return Math.ceil(n / 7);
}

//14. 피자 나눠 먹기 (2)
function solution4(n) {
    let pizza = 1;
    while ((n * pizza) % 6 !== 0) {
        pizza += 1;
    }
    return (n * pizza) / 6;
}

//15. 피자 나눠 먹기 (3)
function solution5(slice, n) {
    return Math.ceil(n / slice);
}

//16. 배열의 평균값
function solution6(numbers) {
    const result = numbers.reduce((prev, cur) => prev + cur);
    return result / numbers.length;
}
