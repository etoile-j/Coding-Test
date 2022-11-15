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

/* 66. 블럭탑쌓기
탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.
예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.   */

//입력
const topp = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';
// 출력
// ["가능", "불가능", "가능", "가능", "가능"]

function a(topp, rule) {
    let answer = [];
    for (let i of topp) {
        answer.push(check(i, rule));
    }
    return answer;
}

function check(i, rule) {
    let temp = rule.indexOf(rule[0]);
    for (let str of i) {
        if (rule.includes(str)) {
            if (temp > rule.indexOf(str)) {
                return '불가능';
            }
            temp = rule.indexOf(str);
        }
    }
    return '가능';
}
console.log(a(topp, rule));

/* 67. 민규의 악수
광장에서 모인 사람들과 악수를 하는 행사가 열렸습니다.
참가자인 민규는 몇명의 사람들과 악수를 한 후 중간에 일이 생겨 집으로 갔습니다.

이 행사에서 진행된 악수는 총 n번이라고 했을 때,
민규는 몇 번의 악수를 하고 집으로 돌아갔을까요?
그리고 민규를 포함한 행사 참가자는 몇 명일까요?

- 악수는 모두 1대 1로 진행이 됩니다.
- 민규를 제외한 모든 참가자는 자신을 제외한 참가자와 모두 한번씩 악수를 합니다.
- 같은 상대와 중복된 악수는 카운트 하지 않습니다.
- 민규를 제외한 참가자는 행사를 모두 마쳤습니다.

예를들어 행사에서 59회의 악수가 진행되었다면 민규는 4번의 악수를 하였고 민규를 포함한 참가자는 12명이다.
행사에서 진행된 악수 횟수(n)를 입력으로 받으면 민규의 악수 횟수와 행사 참가자 수가 출력됩니다.    */
//입력: 59
//출력: [4, 12] // [악수 횟수, 행사 참가자 수]

// n-1 + n-2 + n-3... 해서 n-1= 이 1이 될 때까지!!
// 그리고 총 참가자 수가 101명이라고 가정했을 때
// 100 + 99 + 98 + 97 ... 3 + 2 + 1.. 이렇게 되는데
// 결국 끝과 끝끼리를 합치면 101이 된다.
// 그럼 결국 101이 50개 있는 것. 101 * 50 = 5050
// 이걸 식으로 표현해보면 (n-1)(n)/2  100 * 101 /2

function sol(n) {
    let num = 0;
    let handshake = 0;
    let temp = 0;
    while (true) {
        handshake = parseInt((num * (num - 1)) / 2);
        if (n < handshake) {
            break;
        }
        temp = handshake;
        num += 1;
    }
    return [parseInt(n - temp), num];
}

const handshakeCount = 59;
console.log(sol(handshakeCount));

/* 68. 버스 시간표
버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.
- 버스 시간표와 현재 시간이 입력으로 주어집니다.
- 출력 포맷은 "00시 00분"입니다. 만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
- 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다. */

// 입력
// ["12:30", "13:20", "14:13"]
// "12:40"
// 출력
// ['지나갔습니다', '00시간 40분', '01시간 33분']

//나
function arrival(time, bus) {
    let print = [];
    const current = new Date(`2022/11/15/${time}`);
    for (let i = 0; i < bus.length; i++) {
        let target = new Date(`2022/11/15/${bus[i]}`);
        let gap =
            target.getHours() * 60 +
            target.getMinutes() -
            (current.getHours() * 60 + current.getMinutes());
        if (gap < 0) {
            print.push('지나갔습니다.');
        } else {
            print.push(
                `${Math.trunc(gap / 60)
                    .toString()
                    .padStart(2, '0')}시간 ${(gap % 60)
                    .toString()
                    .padStart(2, '0')}분`
            );
        }
    }
    return console.log(print);
}

const bus = ['12:30', '13:20', '14:13'];
const time = '12:40';
arrival(time, bus);
