//71. 세균 증식
function solution(n, t) {
    return n * 2 ** t;
}

//72. 문자열 정렬하기 (2)
function solution(my_string) {
    return my_string.toLowerCase().split('').sort().join('');
}

// Day 19. 문자열, 배열, 조건문
//73. 7의 개수
function solution(array) {
    let answer = '';
    for (let i = 0; i < array.length; i++) {
        answer += array[i];
    }
    return answer.split(7).length - 1;
}

//74. 잘라서 배열로 저장하기
function solution(my_str, n) {
    var answer = [];
    const strs = my_str.split('');
    while (strs.length > 0) {
        let temp = strs.splice(0, n).join('');
        answer.push(temp);
    }
    return answer;
}

//75. 중복된 숫자 개수
function solution(array, n) {
    return array.filter((i) => i === n).length;
}

//76. 머쓱이보다 키 큰 사람
function solution(array, height) {
    return array.filter((i) => i > height).length;
}
