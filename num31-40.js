/* 31. 자바스크립트 자료형의 복잡도
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)  */

//나 3, 5번??
//답은 3, 5

//O(1): 문제를 해결하는데 오직 한 단계만 처리. 입력값이 증가하더라도 시간이 늘어나지 않는다.
//slice(), includes- O(n): 입력값이 증가함에 따라 시간 또한 같은 비율로 증가하는 것을 의미한다.


/* 32. 문자열 만들기
문자열을 입력받으면 단어의 갯수를 출력하는 프로그램 작성해주세요.
ex) 입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
    출력 : 5      */

//나
const input = prompt('문자열을 입력해 주세요').split(' ');
console.log(input.length);


/* 33. 거꾸로 출력하기
한 줄에 여러 개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램 작성해주세요.
ex) 입력 : 1 2 3 4 5
    출력 : 5 4 3 2 1       */

//나
const input = prompt('공백으로 구분해 숫자를 입력하세요').split(' ');
console.log(input.reverse().join(' '));

//답    처럼 반복문 사용도 가능하다.
const data = prompt('숫자를 입력하세요.').split(' ').reverse();
const result = '';

for (let i=0; i<data.length; i++){
  result += data[i];
}

console.log(result);


/* 34. sort 구현하기
키 순서대로 서야함. 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램 작성해보자.
키는 공백으로 구분하여 입력됨.
ex) 입력 : 176 156 158 165 167
    출력 : NO
    입력 : 156 158 165 167 176
    출력 : YES       */

//나
const original = prompt('키를 숫자만 공백으로 구분해 입력해 주세요.');
let sorted = original.split(' ').sort((a, b) => a - b).join(' ');

if(original === sorted) {
    console.log('YES');
} else {
    console.log('NO');
}


/* 35. Factory 함수 사용하기
2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수 만드려고 합니다.
<pass>에 코드를 작성해 two 함수를 완성하세요      */
function one(n){
    function two(){
        //pass
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

//나(pass부분 포함한 two함수 부분)
//1
function two(num) {
    return Math.pow(num, n);
}
//2
function two(num) {
    return num ** n;
}


/* 36. 구구단 출력하기
1~9까지 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램 작성하세요.
ex) 입력 : 2
    출력 : 2 4 6 8 10 12 14 16 18   */

//나
const dan = prompt('출력되길 원하는 구구단의 단 수를 입력하세요.');
result = [];
for (let i = 1; i < 10; i++) {
    result.push(dan * i);
}
console.log(result.join(' '));

//답
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';    //공백을 이렇게 따로 주고 문자열로 했어도 됐다!
}

console.log(result);


/* 37. 반장 선거
학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램 작성.
ex) 입력 : 원범 원범 혜원 혜원 혜원 혜원 유진 유진
    출력 : 혜원(이)가 총 4표로 반장이 되었습니다.   */

//나
const vote = prompt('공백으로 구분해 입력하세요.').split(' ');
let obj= {};

for (let i = 0; i < vote.length; i++) {
    if (!obj[vote[i]]) {
        obj[vote[i]] = + 1;
    } else {
        obj[vote[i]]++;
    }
}

let winner = '';

winner = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
console.log(`${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`);
