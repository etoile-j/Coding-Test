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
