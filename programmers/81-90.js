// Day 21. 문자열, 사칙연산, 시뮬레이션, 2차원배열, 수학, 배열
//81. 숨어있는 숫자의 덧셈 (2)
function solution(my_string) {
    let first = '';
    for (let i of my_string) {
        if (isNaN(i) === true) {
            first += ' ';
        } else {
            first += i;
        }
    }

    const arr = first.trim().split(' ');
    let second = [];
    for (let j of arr) {
        isNaN(j) === true ? second.push(0) : second.push(j);
    }
    return second.reduce((a, b) => a + Number(b), 0);
}

//82. 안전지대
function solution3(board) {
    const isBombNearby = (r, c) => {
        const nearby = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];

        const isInBoard = (r, c) =>
            r >= 0 && r < board.length && c >= 0 && c < board.length;

        return nearby.some(
            ([dR, dC]) =>
                isInBoard(r + dR, c + dC) && board[r + dR][c + dC] === 1
        );
    };

    let count = 0;

    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board.length; c++) {
            if (board[r][c] !== 1 && !isBombNearby(r, c)) count += 1;
        }
    }
    return count;
}

//83. 삼각형의 완성조건 (2)
function solution3(sides) {
    return Math.min(...sides) * 2 - 1;
}

//84. 외계어 사전
function solution4(spell, dic) {
    let temp = 0;
    for (let i = 0; i < dic.length; i++) {
        temp = 0;
        for (let j of spell) {
            if (dic[i].indexOf(j) > -1) {
                temp++;
                if (temp >= spell.length) return 1;
            }
        }
    }
    return 2;
}

// Day 22. dp, 수학, 조건문, 배열
//85. 저주의 숫자 3
function solution5(n) {
    let answer = 0;

    for (let i = 0; i < n; i++) {
        answer++;
        while (answer % 3 === 0 || answer.toString().includes('3')) {
            answer++;
        }
    }
    return answer;
}

//86. 평행
function solution6(dots) {
    let answer = 0;
    function comparison(f, s, t, fo) {
        const a = (dots[f][0] - dots[s][0]) / (dots[f][1] - dots[s][1]);
        const b = (dots[t][0] - dots[fo][0]) / (dots[t][1] - dots[fo][1]);
        if (a == b) answer = 1;
    }
    comparison(0, 1, 2, 3);
    comparison(0, 2, 1, 3);
    comparison(0, 3, 1, 2);

    return answer;
}
