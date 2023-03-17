function solution(s) {
    let answer = [];
    let count = 0;
    s = s.split('');

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            count = 0;
            answer.push(' ');
        } else {
            if (count % 2 === 0) {
                answer.push(s[i].toUpperCase());
                count++;
            } else {
                answer.push(s[i].toLowerCase());
                count++;
            }
        }
    }
    return answer.join('');
}

function solution2(s) {
    return s
        .split(' ')
        .map((word) =>
            word
                .split('')
                .map((v, idx) =>
                    idx % 2 === 0 ? v.toUpperCase() : v.toLowerCase()
                )
                .join('')
        )
        .join(' ');
}
