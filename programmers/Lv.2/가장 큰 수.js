function solution(numbers) {
    const answer = numbers
        .sort((a, b) => {
            a = String(a);
            b = String(b);
            return b + a - (a + b);
        })
        .join('');

    // answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    // answer = numbers.sort((a, b) => {
    //     return String(a) + b > String(b) + a ? -1 : 1;
    // });

    return answer[0] === '0' ? '0' : answer;
}
