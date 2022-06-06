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


/* 43. 10진수를 2진수로
우리가 흔히 사용하는 숫자 1, 8, 19, 123123 등등은 10진수 체계이다.
이걸 컴퓨터가 알아들을 수 있는 2진수로 바꾸려고 한다.
예로 13은 2^3 + 2^2 + 2^0 = 13 이기 때문에 1101로 표현합니다.
사용자에게 숫자를 입력받고 이를 2진수로 바꾸고 그 값을 출력해주세요. */
//나 
const n = parseInt(prompt('2진수로 변환할 10진수를 입력해주세요.'));
console.log(n.toString(2));


/* 44. 각 자리수의 합
사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요.
예를 들어 
18234 = 1+8+2+3+4 이고 정답은 18입니다.
3849 = 3+8+4+9 이고 정답은 24입니다.
ex) 입력 : 3849
    출력 : 24
*/
//나
const n = prompt('숫자를 입력하세요').split('');
//숫자만 입력하게 강제할까 말까~
let box = 0;
for(let i=0; i<n.length;i++) {
    box += parseInt(n[i]);
}
console.log(box);


/* 45. getTime()함수 사용하기
Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터
지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.
이를 이용하여 현재 연도(2019)를 출력해보세요 */

const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970
                       //1시간,일, 년, ms로 맞추려고!
                       //1970을 더한 건, 1970 기준으로 52년 지났다고 나오기 때문
console.log(year);


/* 46. 각 자리수의 합 2
1부터 20까지의(20포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요
예로 10부터 15까지 모든 숫자 일렬로 놓으면 101112131415이고
각 자리의 숫자를 더하면 21입니다.(1+0+1+1+1+2+1+3+1+4+1+5 = 21) */

//나
nums = '';
for (let i = 1; i <= 20; i++) {
    nums += i;
}

result = 0;
for (let j = 0; j < nums.length; j++) {
    result += parseInt(nums[j]);
}
console.log(result);


/* 47. set 자료형의 응용
중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.
아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.  */
const people = [
    ('이호준', '01050442903'),
    ('이호상', '01051442904'),
    ('이준호', '01050342904'),
    ('이호준', '01050442903'),
    ('이준', '01050412904'),
    ('이호', '01050443904'),
    ('이호준', '01050442903'),
];  

//나
console.log(new Set(people).size);


/* 48. 대소문자 바꿔서 출력하기
문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
ex) 입력 : AAABBBcccddd
    출력 : aaabbbCCCDDD
*/
const input = prompt('영문자 입력');
let result = '';
for(let i=0;i<input.length;i++) {
    if(input[i]===input[i].toLowerCase()) {
        result+=input[i].toUpperCase();
    } else {
        result+=input[i].toLowerCase();
    }
}
console.log(result);

/* 49. 최댓값 구하기
순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다.
주어진 숫자들 중 최댓값을 반환하라. 
ex) 입력 : 10 9 8 7 6 5 4 3 2 1
    출력 : 10       */
//나
const nums = prompt('공백으로 구분해 숫자를 입력하세요').split(' ');
nums.sort((a, b) => b - a);
const result = parseInt(nums[0]);
console.log(result);
