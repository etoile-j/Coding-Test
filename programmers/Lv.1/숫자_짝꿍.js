function solution(X, Y) {
    let answer = [];

    let obj = X.split('').reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});

    for (let i = 0; i < Y.length; i++) {
        if (obj[Y[i]] > 0) {
            obj[Y[i]]--;
            answer.push(Y[i]);
        }
    }

    if (answer.length === 0) return '-1';
    else if (answer[0] == 0) return '0';
    else return answer.sort((a, b) => b - a).join('');
}
