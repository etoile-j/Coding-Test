function solution(s) {
    s = s.split(' ');
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i].trim().length > 0) {
            answer.push(s[i][0].toUpperCase() + s[i].slice(1).toLowerCase());
        } else {
            answer.push('');
        }
    }
    return answer.join(' ');
}
