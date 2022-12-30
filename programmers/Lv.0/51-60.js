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

// Day 15. 문자열, 해시, 배열, 수학
//57. 영어가 싫어요
function solution7(numbers) {
    const nums = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    for (let i = 0; i < nums.length; i++) {
        numbers = numbers.split(nums[i]).join(i);
    }
    return Number(numbers);
}

//58. 인덱스 바꾸기
function solution8(my_string, num1, num2) {
    let arr = my_string.split('');
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    return arr.join('');
}

//59. 한 번만 등장한 문자
function solution9(s) {
    let arr = s.split('');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = +1;
        } else {
            obj[arr[i]]++;
        }
    }

    let answer = [];
    const arr2 = Object.entries(obj);
    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j][1] === 1) answer.push(arr2[j][0]);
    }
    return answer.sort().join('');
}

//60. 약수 구하기
function solution10(n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) answer.push(i);
    }
    return answer;
}
