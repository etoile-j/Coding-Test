function solution(a, b) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }

    let result = 0;
    for (a; a <= b; a++) {
        result += a;
    }
    return result;
}
