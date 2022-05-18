// 1. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요
var nums = [100, 200, 300, 400, 500];

//나
//방법1
nums.splice(3,2)
console.log(nums);

//방법2
nums.pop();
nums.pop();
console.log(nums);


// 2. 배열의 내장함수
// <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요
// 데이터
var arr = [200, 100, 300];
//pass
console.log(arr);

//출력
[200, 100, 10000, 300];

//나
arr.splice(2, 0, 10000);
console.log(arr);


/* 3. 변수의 타입 
다음의 출력값으로 올바른 것은?
var arr = [100, 200, 300];
console.log(typeof(arr));
1) undefined
2) string
3) number
4) object       */
//나 : 4번  정답~ undefined, string, number 는 모두 기본 자료형(primitive type) 입니다.


/* 4. 변수의 타입2
다음의 변수 a를 typeof(a)로 넣었을 때 출력될 값과의 연결이 알맞지 않은 것은?
1) 입력: a = 1 , 출력: number
2) 입력: a = 2.22 , 출력: boolean
3) 입력: a = 'p', 출력: string
4) 입력: a = [1,2,3], , 출력: object      */
// 2번! number이다.


/* 5. for문 계산
다음 코드의 출력값으로 알맞은 것은? */
var a = 10;
var b = 2;

for(var i = 1;i < 5;i+=2){
  a += i;
}
console.log(a+b);

//나
//답은 16
//a는 10이었지만 for문을 돌린 후 10+1+3=14가 되었고
//a(14)+b(2)=16


/* 6. False
다음은 자바스크립트 문법 중 False로 취급하는 것들이다. 이중 False로 취급하지 않는 True를 골라라.
1) NaN
2) 1
3) ""
4) 0
5) undefined */
// 2번!
//JavaScript 에서는 null, undefined, 0, 빈 문자열, NaN, false 를 제외하고는 모두 참인 값으로 평가합니다.


/* 7. 변수명
다음 중 변수명으로 사용할 수 없는 것 2개 고르시오
1) age  2) &age 3) let
4) _age 5) 1age */
// 3, 5
// JavaScript 식별자는 문자, 밑줄(_) 혹은 달러 기호($)로 시작해야하며 let 은 이미 JavaScript 문법에 존재하는 예약어라 사용이 불가능합니다.


/* 8. 객체의 키 이름 중복
자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력 (출력값은 공백을 넣지 않습니다.) */
var d = {
    'height' : 180,
    'weight' : 78,
    'weight' : 84,
    'temperature' : 36,
    'eyesight' : 1
};
console.log(d['weight']);

//나
//78 땡..!!! 뒤에 나오는 weight을 보지 못함..

//키 내부에서 중복되는 이름이 있을 경우 자바스크립트는 맨 뒤에 적은 것을 값으로 연결해준다.!!!!!!!!!!


/* 9. concat을 활용한 출력 방법
다음 소스코드를 완성하여 날짜와 시간을 출력하시오.*/
//데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸 채워주세요

console.log(result);

//출력
//2019/04/26 11:34:27

//나
//방법1
var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
//방법2
var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);


/* 10. 별 찍기!!!
프로그래밍으로 트리를 만들기.*/
//입력
5
//출력
    *
   ***
  *****
 *******
*********

//나
const input = prompt('몇 줄을 만들까요?');
let star = '';

for(let i = 0; i < input; i++) {   
  for(let s=input; s > i; s--) {
      star += ' ';
  }
  for (let j = 0; j <= i * 2; j++) {
      star += '*';
  }
  star += '\n';
}
console.log(star);

//답
const n = prompt('숫자를 입력하세요.');
let tree = '';

for(let i=1; i<=n; i++){
  let star = '';
  for(let j=1; j<=n-i; j++){
    star += ' ';
  }
  for(let k=1; k<=2*i-1; k++){
    star += '*';
  }
  tree += star + '\n';
}

console.log(tree);