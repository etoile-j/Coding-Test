//71. 세균 증식
function solution(n, t) {
    return n * 2 ** t;
}

//72. 문자열 정렬하기 (2)
function solution2(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

// Day 19. 문자열, 배열, 조건문
//73. 7의 개수
function solution3(array) {
    let answer = '';
    for (let i = 0; i < array.length; i++) {
        answer += array[i];
    }
    return answer.split(7).length - 1;
}

//74. 잘라서 배열로 저장하기
function solution4(my_str, n) {
    var answer = [];
    const strs = my_str.split('');
    while (strs.length > 0) {
        let temp = strs.splice(0, n).join('');
        answer.push(temp);
    }
    return answer;
}

//75. 중복된 숫자 개수
function solution5(array, n) {
    return array.filter((i) => i === n).length;
}

//76. 머쓱이보다 키 큰 사람
function solution6(array, height) {
    return array.filter((i) => i > height).length;
}

// Day 20. 수학, 시뮬레이션, 문자열, 사칙연산
//77. 직사각형 넓이 구하기
function solution7(dots) {
    let x = [];
    let y = [];
    for (let i = 0; i < dots.length; i++) {
        x.push(dots[i][0]);
        y.push(dots[i][1]);
    }
    return (
        (Math.min(...x) - Math.max(...x)) * (Math.min(...y) - Math.max(...y))
    );
}

//78. 캐릭터의 좌표
function solution8(keyinput, board) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < keyinput.length; i++) {
        if (keyinput[i] === 'up') {
            b < Math.trunc(board[1] / 2) ? b++ : null;
        } else if (keyinput[i] === 'down') {
            b > Math.trunc(-board[1] / 2) ? b-- : null;
        } else if (keyinput[i] === 'left') {
            a > Math.trunc(-board[0] / 2) ? a-- : null;
        } else if (keyinput[i] === 'right') {
            a < Math.trunc(board[0] / 2) ? a++ : null;
        }
    }
    return [a, b];
}

//79. 최댓값 만들기 (2)
function solution9(numbers) {
    const sort = numbers.sort((a, b) => b - a);
    const tail = sort.pop() * sort.pop();
    return sort[0] * sort[1] > tail ? sort[0] * sort[1] : tail;
}

//80. 다항식 더하기
function solution10(polynomial) {
    const arr = polynomial.split(' + ');
    const x = arr
        .filter((i) => i.includes('x'))
        .map((i) => (i === 'x' ? 1 : parseInt(i)))
        .reduce((a, b) => a + b, 0);
    const num = arr
        .filter((i) => isNaN(i) === false)
        .reduce((a, b) => a + Number(b), 0);

    let result = [];
    if (x > 0) x === 1 ? result.push('x') : result.push(`${x}x`);
    if (num > 0) result.push(num);

    if (result.length > 1) {
        return result.join(' + ');
    } else {
        return result[0].toString();
    }
}
