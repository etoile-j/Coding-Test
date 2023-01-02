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
