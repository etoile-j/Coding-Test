function solution(n) {
    const arr = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let line = -1,
        idx = 0,
        num = 1;

    while (n > 0) {
        for (let i = 0; i < n; i++) {
            line++;
            arr[line][idx] = num++;
        }
        n--;

        for (let j = 0; j < n; j++) {
            idx++;
            arr[line][idx] = num++;
        }
        n--;

        for (let i = 0; i < n; i++) {
            line--;
            idx--;
            arr[line][idx] = num++;
        }
        n--;
    }

    return arr.flat();
}
