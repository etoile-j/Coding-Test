/* 41. 소수판별
숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
(소수 : 1과 자기 자신만으로 나누어 떨어지는, 1보다 큰 양의 정수)    */

//나
const n = parseInt(prompt('소수 판별할 숫자 하나 입력'));
let count = 0;
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        count++;
    }
}
count === 2 ? console.log('YES') : console.log('NO');
console.log(count);


/* 42. 2020년
2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
두 수 a, b를 입력 받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE...

예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"을 반환하세요.

제한 조건
2020년은 윤년입니다.
2020년 a월 b일은 실제로 있는 날입니다.
(13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.) */

//나
function solution(a, b) {
    let d = new Date(2020, a - 1, b);
    let week = d.toString().slice(0, 3).toUpperCase();
    console.log(week);
}