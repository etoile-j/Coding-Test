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
