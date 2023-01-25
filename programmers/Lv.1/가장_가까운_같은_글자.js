function solution(s) {
    let answer = [-1];
    let str = [s[0]];
    for (let i = 1; i < s.length; i++) {
        let position = str.lastIndexOf(s[i]);
        if (position > -1) {
            answer.push(i - position);
        } else {
            answer.push(position);
        }
        str.push(s[i]);
    }
    return answer;
}

function solution2(s) {
    const hash = {};

    return [...s].map((v, i) => {
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}
