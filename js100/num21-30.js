/* 21. set은 어떻게 만드나요?
다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오
1) var x = {1, 2, 3, 4, 5, };
2) var x = {};
3) var x = new Set('javascript');
4) var x = new Set(range(5)) ;
5) var x = new Set();
*/
//3, 5 정답!


/* 22. 배수인지 확인하기?
다음 중 변수 i가 6의 배수인지 확인하는 방법으로 올바른 것은?
1) i/6 == 0
2) i%6 == 0
3) i&6 == 0
4) i|6 == 0
5) i//6 == 0    */
//2번 정답


/* 23. ox문제
console.log(10/3)의 출력 결과는 3이다. */
//x 정답
//출력 결과는 3.3333333333333335 이 나옵니다.
//소숫점이 없는 정수를 출력하고자 할 때는 Math.floor() 함수를 쓰면 됩니다.


/* 24. 대문자로 바꿔주세요
이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세요.
ex) 입력 : mary 출력 : MARY     */

//나
const name = prompt('영문 이름을 입력하세요.');

console.log(name.toUpperCase());


/* 25. 원의 넓이를 구하세요
원의 넓이는 '반지름의 길이 x 반지름의 길이 x 3.14'로 구할 수 있습니다.
함수를 사용해 원의 넓이를 구하는 코드를 작성해봅시다.
입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어주세요. */

//나
function circle(n) {
    return n * n * 3.14;
}

//답
function circle(n) {
    const result = n * n * 3.14;
  
    return result;
}
  
const r = prompt("원의 반지름을 입력하세요.");
  
console.log(circle(r));
// 함수 만들래서 입력값 받을 생각을 안 했다.


/* 26. 행성문제2
우리 태양계를 수금지화목토천해의 영어 이름은
Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune이다.
행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램 만들어 주세요.    */

//나
const plenet = {
    '수성': 'Mercury',
    '금성': 'Venus',
    '지구': 'Earth',
    '화성': 'Mars',
    '목성': 'Jupiter',
    '토성': 'Saturn',
    '천왕성': 'Uranus',
    '해왕성': 'Neptune',
}

const korean = prompt('행성 이름을 한글로 입력하세요.');

console.log(plenet[korean]);


/* 27. 객체 만들기
첫 번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두 번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
두 개를 합쳐 학생의 이름이 key이고 value가 수학점수인 객체를 출력해주세요
ex) 입력 : Sujin Yujin 
          100 70 
    출력 : {'Sujin': 100, 'Yujin': 70}      */

//나
const names = prompt('이름을 공백으로 구분해 입력하세요.').split(' ');
const scores = prompt('수학점수를 공백으로 구분해 입력하세요.').split(' ');
let obj = {};

for(let i=0;i<names.length;i++) {
    obj[names[i]] = parseInt(scores[i]);
}

console.log(obj);


/* 28. 2-gram
2-gram이란 문자열에서 두 개의 연속된 요소를 출력하는 방법입니다.
예로 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.
입력 : Javascript
출력
J a
a v
v a
a s
s c
c r
r i
i p
p t
입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해주세요  */

//나
function twoGram(input) {
    const switchArray = input.split('');
    switchArray.reduce((prev, cur) => {
        console.log(prev, cur);
        return cur;
    })
}

//답	여기는 for로 찍는 걸 좋아하는 듯 오호
const data = prompt('문자를 입력하세요.');

for (let i=0; i<data.length-1; i++){
  console.log(data[i], data[i+1]);
}


/* 29. 대문자만 지나가세요
알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.     */

//나
function upperCase(a) {
    if (a.toUpperCase() === a) {
        console.log('YES');
    } else {
        console.log('NO');
    }
}


/* 30. 문자열 속 문자 찾기
문자 pineapple에는 apple이라는 문자가 숨어 있다.
첫 번째 입력에서는 문자열이 입력되고, 두 번째에는 찾을 문자가 입력되어야 한다.
그 문자가 시작하는 index를 반환하는 프로그램을 만들어주세요
ex) 입력 : pinapple is yummy 
          apple 
    출력 : 4      */

//나
const str = prompt('문자열을 입력하세요.');
const findStr = prompt('찾을 문자열을 입력하세요.');

console.log(str.indexOf(findStr) + 1);

//indexOf() 메서드는 호출한 스트링 객체나 배열에서 
//주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고
//존재하지 않으면 -1을 반환.