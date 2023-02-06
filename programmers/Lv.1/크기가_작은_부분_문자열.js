function solution(t, p) {
    let answer = [];
    for (let i = 0; i < t.length; i++) {
        answer.push(t.substr(i, p.length));
    }
    return answer.filter((i) => i.length == p.length && p >= i).length;
}
