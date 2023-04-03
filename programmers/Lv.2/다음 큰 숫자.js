function solution(n) {
    function countOne(number) {
        return number
            .toString(2)
            .split('')
            .filter((v) => v == 1).length;
    }

    const one = countOne(n);

    while (n++) {
        if (one === countOne(n)) return n;
    }
}

function solution2(n) {
    const one = n.toString(2).match(/1/g).length;

    while (n++) {
        if (one === n.toString(2).match(/1/g).length) return n;
    }
}
