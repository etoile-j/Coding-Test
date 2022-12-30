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

//87. 겹치는 선분의 길이
function solution7(lines) {
    let min = Math.min(...lines.flat());
    let max = Math.max(...lines.flat());
    let arr = Array(max - min + 1).fill(0);

    for (let line of lines) {
        line.sort((a, b) => a - b);
        if (min < 0) {
            line[0] += Math.abs(min);
            line[1] += Math.abs(min);
        }
        for (let i = line[0]; i < line[1]; i++) arr[i]++;
    }

    return arr.filter((v) => v > 1).length;
}

//88. 유한소수 판별하기
function solution8(a, b) {
    return (a / b).toString().length > 10 ? 2 : 1;
}

// Day 23. 배열, 정렬, 문자열
//89. 특이한 정렬
function solution(numlist, n) {
    return numlist.sort((a, b) => {
        let [aGap, bGap] = [Math.abs(a - n), Math.abs(b - n)];
        if (aGap === bGap) {
            return b - a;
        } else {
            return aGap - bGap;
        }
    });
}

//90. 등수 매기기
function solution10(score) {
    let arr = [];
    let answer = [];
    for (let i = 0; i < score.length; i++) {
        arr.push(score[i][0] + score[i][1]);
    }
    const sort = [...arr].sort((a, b) => b - a);

    for (let j = 0; j < sort.length; j++) {
        answer.push(sort.indexOf(arr[j]) + 1);
    }
    return answer;
}
