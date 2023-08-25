function solution(word) {
    let answer = -1;
    let sensor = true;

    const dfs = (w) => {
        const alphabetList = ['A', 'E', 'I', 'O', 'U'];

        if (sensor) {
            answer++;
            if (w === word) {
                sensor = false;
                return;
            } else if (w !== word && w.length < 5) {
                for (let i = 0; i < 5; i++) {
                    dfs(w + alphabetList[i]);
                }
            } else return;
        }
    };

    dfs('');
    return answer;
}
