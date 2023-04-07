function solution(s) {
    let count = 0;
    let zeroCount = 0;

    while (!(s === '1')) {
        let oneLength = s.match(/1/g).length;
        zeroCount += s.length - oneLength;
        s = oneLength.toString(2);
        count++;
    }
    return [count, zeroCount];
}
