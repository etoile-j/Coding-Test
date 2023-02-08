function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(2016, a - 1, b);
    return week[date.getDay()];
}
// 속도 더 빠름

function solution2(a, b) {
    const date = new Date(2016, a - 1, b);
    return date.toString().slice(0, 3).toUpperCase();
}
