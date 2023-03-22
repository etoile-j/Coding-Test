function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    if (s.replaceAll(/[0-9]/g, '') === '') {
        return true;
    } else {
        return false;
    }
}

function solution2(s) {
    if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) return true;
    return false;
}

function solution3(s) {
    const regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
}
