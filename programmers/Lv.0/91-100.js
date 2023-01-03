//91. 옹알이 (1)
function solution(babbling) {
    const original = babbling.length;

    for (let i = 0; i < babbling.length; i++) {
        babbling[i] = babbling[i].replaceAll('ye', '');
        babbling[i] = babbling[i].replaceAll('aya', '');
        babbling[i] = babbling[i].replaceAll('woo', '');
        babbling[i] = babbling[i].replaceAll('ma', '');
    }
    const filtered = babbling.filter((i) => i !== '');
    return original - filtered.length;
}

//92. 로그인 성공?
function solution2(id_pw, db) {
    for (let i = 0; i < db.length; i++) {
        if (id_pw[0] === db[i][0] && id_pw[1] === db[i][1]) {
            return 'login';
        } else if (id_pw[0] === db[i][0]) {
            return 'wrong pw';
        }
    }
    return 'fail';
}

// Day 24. 수학, 시뮬레이션, 문자열, 조건문, 반복문
//93. 치킨 쿠폰
function solution3(chicken) {
    let answer = 0;

    while (chicken >= 10) {
        answer += parseInt(chicken / 10);
        chicken = parseInt(chicken / 10) + (chicken % 10);
    }

    return answer;
}

//94. 이진수 더하기
function solution4(bin1, bin2) {
    const add = parseInt(bin1, 2) + parseInt(bin2, 2);
    return add.toString(2);
}

//95. A로 B 만들기
function solution5(before, after) {
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}

//96. k의 개수
function solution6(i, j, k) {
    var answer = '';
    let count = 0;

    for (let b = i; b <= j; b++) {
        answer += b;
    }

    for (let a = 0; a < answer.length; a++) {
        if (answer[a] == k) {
            count += 1;
        }
    }
    return count;
}

// Day 25. 시뮬레이션, 조건문, 수학
//97. 문자열 밀기
function solution7(A, B) {
    let temp = 0;
    let count = 0;
    const arrA = A.split('');
    for (let i = 0; i < arrA.length; i++) {
        if (arrA.join('') === B) return count;
        temp = arrA.pop();
        arrA.unshift(temp);
        count++;
    }
    return -1;
}

//98. 종이 자르기
function solution8(M, N) {
    return M * N - 1;
}

//99. 연속된 수의 합
function solution9(num, total) {
    var min = Math.ceil(total / num - Math.floor(num / 2));
    var max = Math.floor(total / num + Math.floor(num / 2));

    return new Array(max - min + 1).fill(0).map((el, i) => {
        return i + min;
    });
}

//100. 다음에 올 숫자
function solution10(common) {
    if (common[1] - common[0] === common[2] - common[1]) {
        const gap = common[1] - common[0];
        return common.pop() + gap;
    } else {
        const gap = common[1] / common[0];
        return common.pop() * gap;
    }
}
