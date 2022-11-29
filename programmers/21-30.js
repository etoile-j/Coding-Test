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

// Day 7. 문자열, 조건문, 수학, 반복문
//25. 특정 문자 제거하기
function solution5(my_string, letter) {
    return my_string.replaceAll(letter, '');
}

//26. 각도기
function solution6(angle) {
    if (angle < 90) {
        return 1;
    } else if (angle === 90) {
        return 2;
    } else if (angle === 180) {
        return 4;
    } else if (90 < angle < 180) {
        return 3;
    }
}

//27. 양꼬치
function solution7(n, k) {
    var answer = n * 12000 + k * 2000;
    if (n / 10 >= 1) {
        return answer - Math.floor(n / 10) * 2000;
    }
    return answer;
}

//28. 짝수의 합
function solution8(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            answer += i;
        }
    }
    return answer;
}

// Day 8. 배열, 구현, 수학
//29. 배열 자르기
function solution9(numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
}

//30. 외계행성의 나이
function solution10(age) {
    const a = 'abcdefghij';
    let answer = '';
    for (let i = 0; i < age.toString().length; i++) {
        answer += a[age.toString()[i]];
    }
    return answer;
}
