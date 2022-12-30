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
