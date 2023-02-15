function solution(array, commands) {
    let answer = [];

    for (let i = 0; i < commands.length; i++) {
        let newArr = array
            .slice(commands[i][0] - 1, commands[i][1])
            .sort((a, b) => a - b);
        answer.push(newArr[commands[i][2] - 1]);
    }
    return answer;
}

function solution2(array, commands) {
    return commands.map((val) => {
        return array.slice(val[0] - 1, val[1]).sort((a, b) => a - b)[
            val[2] - 1
        ];
    });
}
