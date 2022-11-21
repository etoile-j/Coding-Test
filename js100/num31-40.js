/* 31. 자바스크립트 자료형의 복잡도
다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오
1) arr[i]
2) arr.push(5)
3) arr.slice()
4) arr.pop()
5) arr.includes(5)  */

//나 3, 5번??
//답은 3, 5

//시간 복잡도: 어떤 알고리즘이 문제를 계산할 때 걸리는 시간

//O(1): 문제를 해결하는데 오직 한 단계만 처리. 입력값이 증가하더라도 시간이 늘어나지 않는다.
//slice(), includes- O(n): 입력값이 증가함에 따라 시간 또한 같은 비율로 증가하는 것을 의미한다.
//3) : 슬라이스의 매개변수만큼 잘라서 새로운 배열을 반환함. 배열의 크기가 커지면 커질수록 사용되는 메모리가 많아진다.
//5) : 배열에 매개변수 값이 들어있는지 true, false로 반환. 배열에 원소 개수가 많을 수록 메서드가 탐색할 값도 점점 많아짐


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
let obj = {};

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

//답
const array = prompt('이름을 입력해주세요.').split(' ');
let result = {};
let winner = "";

for(let index in array){
  let val = array[index];
  result[val] = result[val] === undefined ? 1 : result[val] = result[val] + 1;
}

winner = Object.keys(result).reduce(function(a, b){
  return result[a] > result[b] ? a : b
});

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);


/* 38. 호준이의 아르바이트
매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다.
채점을 하고 점수를 보내면 아이들 숫자만큼 사탕을 사러 가기로 했다.
1위~3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.
ex) 입력 : 97 86 75 66 55 97 85 97 97 95
    출력 : 6    */

//나
const scores = prompt('공백으로 구분해 점수를 입력하세요.').split(' ');
let obj = {};

for (let i = 0; i < scores.length; i++) {
    if (!obj[scores[i]]) {
        obj[scores[i]] = + 1;
    } else {
        obj[scores[i]]++;
    }
}

objValue = Object.values(obj);

let result = 0;
result += objValue.pop();
result += objValue.pop();
result += objValue.pop();

console.log(result);


/* 39. 오타 수정하기
문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해주세요.
ex) 입력 : querty
    출력 : euerty
    입력 : hqllo my namq is hyqwon
    출력 : hello my name is hyewon  */

//나
//첫 번째
let input = prompt('영문장을 입력하세요.').split('');
for (let i = 0; i < input.length; i++) {
    if (input[i] === 'q') {
        input[i] = 'e';
    }
}
console.log(input.join(''));

//두 번째
const input = prompt('영문장을 입력하세요.');
console.log(input.replace(/q/gm, 'e'));

//이 방법도 있다
const word = prompt('입력하세요.');

function replaceAll(str, searchStr, replaceStr) {
   return str.split(searchStr).join(replaceStr);
}


/* 40. 놀이동산에 가자
모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.
원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해주세요.
첫 번째 입력으로 제한 무게가 주어지고, 두 번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.
ex) 입력 : 
50
5
20
20
20
20
20
출력 : 2    */

//나
let limit = parseInt(prompt('제한 무게'));
const n = prompt('친구 수');
let count = 0;

for (let i = 1; i <= n; i++) {
    limit -= parseInt(prompt('차례대로 탑승할 친구들의 무게를 한 명씩 입력하세요'));
    if (limit >= 0) {
        count++;
    }
}
console.log(count);