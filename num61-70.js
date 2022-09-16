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
