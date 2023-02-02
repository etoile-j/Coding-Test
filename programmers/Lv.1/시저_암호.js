function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
        } else if (s[i] === s[i].toUpperCase()) {
            answer += String.fromCharCode(
                ((s.charCodeAt(i) + n - 65) % 26) + 65
            );
        } else {
            answer += String.fromCharCode(
                ((s.charCodeAt(i) + n - 97) % 26) + 97
            );
        }
    }
    return answer;
}
