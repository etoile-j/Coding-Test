function solution(s) {
    let answer = [];
    const changeStr = s.replaceAll('{', '[').replaceAll('}', ']');
    const arr = eval(changeStr).sort((a, b) => a.length - b.length);

    arr.map((a) =>
        a.map((v) => {
            if (!answer.includes(v)) answer.push(v);
        })
    );
    return answer;
}
