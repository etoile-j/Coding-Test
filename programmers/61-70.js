// Day 16. 문자열, 수학, 배열, 조건문
//61. 편지
function solution(message) {
    return message.length * 2;
}

//62. 가장 큰 수 찾기
function solution2(array) {
    const max = Math.max(...array);
    return [max, array.indexOf(max)];
}

//63. 문자열 계산하기
function solution3(my_string) {
    return eval(my_string.split(' ').join(''));
}

//64. 배열의 유사도
function solution4(s1, s2) {
    var answer = 0;
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1[i] === s2[j]) answer++;
        }
    }
    return answer;
}

// Day 17. 문자열, 수학, 조건문, 배열, 사칙연산
//65. 숫자 찾기
function solution5(num, k) {
    let answer = num.toString().indexOf(k);
    return answer > -1 ? answer + 1 : answer;
}

//66. n의 배수 고르기
function solution6(n, numlist) {
    var answer = [];
    for (let i of numlist) {
        if (i % n === 0) {
            answer.push(i);
        }
    }
    return answer;
}

//67. 자릿수 더하기
function solution7(n) {
    const answer = n.toString().split('');
    return answer.reduce((p, c) => parseInt(p) + parseInt(c), 0);
}

//68. OX퀴즈
function solution8(quiz) {
    var answer = [];

    for (let i = 0; i < quiz.length; i++) {
        let a = quiz[i].split(' ');
        if (a[1] === '-') {
            Number(a[0]) - Number(a[2]) === Number(a[4])
                ? answer.push('O')
                : answer.push('X');
        } else {
            Number(a[0]) + Number(a[2]) === Number(a[4])
                ? answer.push('O')
                : answer.push('X');
        }
    }
    return answer;
}

// Day 18. 문자열, 수학, 조건문, 정렬
//69. 문자열 안에 문자열
function solution(str1, str2) {
    return str1.indexOf(str2) > -1 ? 1 : 2;
}

//70. 제곱수 판별하기
function solution(n) {
    return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
}
