function solution(n, t, m, p) {
    let numbers = '';
    let result = '';

    for (let i = 0; i < t * m; i++) {
        numbers += i.toString(n);
    }

    let j = p - 1;
    while (result.length !== t) {
        result += numbers[j];
        j += m;
    }
    return result.toUpperCase();
}

// 이 방법은 한 번 돌리면서 뽑아낼 거 뽑고 버리는!
function solution2(n, t, m, p) {
    let result = '';
    let temp = '';
    let idx = 0;

    while (result.length < t) {
        if (temp.length >= m) {
            result += temp[p - 1];
            temp = temp.slice(m);
        } else {
            temp += idx.toString(n);
            idx++;
        }
    }
    return result.toUpperCase();
}
