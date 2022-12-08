//51. 중복된 문자 제거
function solution(my_string) {
    var answer = '';
    for (let i of my_string) {
        if (!answer.includes(i)) {
            answer += i;
        }
    }
    return answer;
}

//52. 삼각형의 완성조건 (1)
function solution(sides) {
    sides.sort((a, b) => a - b);
    return sides[2] < sides[0] + sides[1] ? 1 : 2;
}

// Day 14. 조건문, 반복문, 시뮬레이션, 문자열
//53. 가까운 수
function solution3(array, n) {
    let gap = Math.abs(n - array[0]);
    let answer = array[0];

    for (let i = 1; i < array.length; i++) {
        if (Math.abs(n - array[i]) < gap) {
            gap = Math.abs(n - array[i]);
            answer = array[i];
        } else if (Math.abs(n - array[i]) === gap) {
            answer = Math.min(array[i], answer);
        }
    }
    return answer;
}

//54. 369게임
function solution4(order) {
    var answer = 0;
    const arr = order.toString().split('');
    for (i of arr) {
        if (Number(i) % 3 === 0 && i > 0) answer++;
    }
    return answer;
}

//55. 암호 해독
function solution5(cipher, code) {
    var answer = '';
    for (let i = code - 1; i < cipher.length; i += code) {
        answer += cipher[i];
    }
    return answer;
}

//56. 대문자와 소문자
function solution6(my_string) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            answer += my_string[i].toLowerCase();
        } else {
            answer += my_string[i].toUpperCase();
        }
    }
    return answer;
}
