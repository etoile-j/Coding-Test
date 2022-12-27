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
