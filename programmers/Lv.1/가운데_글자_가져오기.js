function solution(s) {
    let r = '';
    if (s.length % 2 != 0) {
        r = s[s.length / 2 - 0.5];
    } else {
        r = s.substr(s.length / 2 - 1, 2);
    }
    return r;
}
