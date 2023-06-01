function solution(keymap, targets) {
    const keymapObj = {};
    keymap.map((string) =>
        string.split('').map((str, idx) => {
            if (keymapObj[str] === undefined) keymapObj[str] = idx + 1;
            else keymapObj[str] = Math.min(keymapObj[str], idx + 1);
        })
    );

    let answer = [];
    for (let i = 0; i < targets.length; i++) {
        let targetSum = 0;
        for (let j = 0; j < targets[i].length; j++) {
            if (keymapObj[targets[i][j]] === undefined) {
                targetSum = -1;
                break;
            } else targetSum += keymapObj[targets[i][j]];
        }
        answer.push(targetSum);
    }
    // 이부분 다른 방법
    for (let i = 0; i < targets.length; i++) {
        answer.push(
            targets[i]
                .split('')
                .reduce((prev, cur) => prev + keymapObj[cur], 0) || -1
        );
    }

    return answer;
}
