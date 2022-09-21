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

/* 62. # 20190923출력하기
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
