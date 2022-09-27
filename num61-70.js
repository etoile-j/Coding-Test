/* 61. 문자열 압축하기
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다. */
//입력: aaabbbbcdddd
//출력: a3b4c1d4

//나
const input = prompt('문자열').split('');
let obj = {};

for (let a in input) {
    // 개수 세어주고
    let val = input[a];
    obj[val] = obj[val] === undefined ? 1 : (obj[val] = obj[val] + 1);
}

let array = Object.entries(obj); // 배열로 만든다
console.log(array);
result = '';
for (let i = 0; i < array.length; i++) {
    result += array[i][0];
    result += array[i][1];
}
console.log(result);

/* 62. 20190923출력하기
`20190923`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.     */

const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';

console.log(
    `${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${
        user_s.match(/c/g).length
    }${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${
        user_s.match(/f/g).length
    }${user_s.match(/g/g).length}${user_s.match(/h/g).length}`
);

/* 63. 친해지고 싶어
한국 대학교의 김한국 교수님은 학생들과 친해지기 위해서 딸에게 줄임말을 배우기로 했습니다.
딸은 '복잡한 세상 편하게 살자'라는 문장을 '복세편살'로 줄여 말합니다.
교수님이 줄임말을 배우기 위해 아래와 같이 어떤 입력이 주어지면 앞 글자만 줄여 출력하도록 해주세요.
입력은 한글 혹은 영어로 입력되며, 띄어쓰기를 기준으로 하여 짧은 형태로 출력합니다.
입력: 복잡한 세상 편하게 살자
출력: 복세편살    */
const input = prompt('입력하세요').split(' ');
console.log(input);
let box = '';
for (let i = 0; i < input.length; i++) {
    box += input[i][0];
}
console.log(box);

/* 64. 이상한 엘레베이터
정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.
예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력: 정량 N이 입력됩니다.
출력: 가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.    */

const n = parseInt(prompt('정량'));
if ((n % 7) % 3 === 0) {
    const a = Math.floor(parseInt(n / 7));
    const b = Math.floor(parseInt((n % 7) / 3));
    console.log(a + b);
} else {
    console.log(-1);
}

// 자바스크립트 숫자 타입의 값은 IEEE 754의 부동소수점 표현 형식 중 배정밀도 64비트 부동소수점 형식을 따른다.
// C나 자바의 경우, 정수와 실수를 구분해서 int, long, float, double 등과 같은 타입으로 정수와 실수를 구분해서 사용하지만,
// 자바스크립트의 경우 모든 수를 실수로 처리하기 때문에 하나의 숫자 타입만 존재한다.

// 1. 컴퓨터로 숫자를 표현하는 데에는 한계가 있고
// 2. 10진수로 표현되는 소수를 2진수로 표현하려면 몇몇의 경우 무한소수가 발생하는데,
// 3. 무한수를 유한하게 표현하려다 보니 미세한 값들이 초과되거나 손실되어
// 4. 계산 오류가 일어난다.

/* 65. 변형된 리스트
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때
[[1, a], [b, 2], [3, c], [d, 4]]
이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.   */

const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

//방법1
let box = [];
for (let i = 0; i < 4; i++) {
    box.push([a[i], b[i]]);
}

for (let j = 0; j < 4; j++) {
    if (j % 2 !== 0) {
        [box[j][0], box[j][1]] = [box[j][1], box[j][0]];
    }
}
console.log(box);

//방법2
let box2 = [];
for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
        box2.push([a[i], b[i]]);
    } else {
        box2.push([b[i], a[i]]);
    }
}
console.log(box2);
