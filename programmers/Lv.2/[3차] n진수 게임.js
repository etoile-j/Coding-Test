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
