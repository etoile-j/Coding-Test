function solution(s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;

    for (let i = 0; i < s.length; i++) {
        let newS = s.substr(i) + s.substr(0, i);
        let arr = [];

        for (let j = 0; j < newS.length; j++) {
            if (newS[j] === '(' || newS[j] === '{' || newS[j] === '[')
                arr.push(newS[j]);
            else {
                if (arr[arr.length - 1] === '(' && newS[j] === ')') arr.pop();
                if (arr[arr.length - 1] === '{' && newS[j] === '}') arr.pop();
                if (arr[arr.length - 1] === '[' && newS[j] === ']') arr.pop();
            }
        }
        if (arr.length === 0) answer++;
    }
    return answer;
}
