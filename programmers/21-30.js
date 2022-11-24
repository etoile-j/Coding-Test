// Day 6. 문자열, 반복문, 출력, 배열, 조건문
//21. 문자열 뒤집기
function solution1(my_string) {
    return my_string.split('').reverse().join('');
}

//22. 직각삼각형 출력하기
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    for (let i = 1; i <= +input[0]; i++) {
        console.log('*'.repeat(i));
    }
});

//23. 짝수 홀수 개수
function solution3(num_list) {
    let odd = 0;
    let even = 0;
    for (let i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? (even += 1) : (odd += 1);
    }
    return [even, odd];
}

//24. 문자 반복 출력하기
function solution4(my_string, n) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        answer += my_string[i].repeat(n);
    }
    return answer;
}
