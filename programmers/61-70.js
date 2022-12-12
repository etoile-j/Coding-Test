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
