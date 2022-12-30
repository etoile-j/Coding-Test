// Day 11. 수학, 반복문
//41. 주사위의 개수
function solution(box, n) {
    let [width, length, height] = box;

    return (
        Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
    );
}

//42. 합성수 찾기
function solution2(n) {
    let answer = 0;
    let temp = 0;
    for (let i = 1; i <= n; i++) {
        temp = 0;
        for (let j = 1; j <= n; j++) {
            if (i % j === 0) {
                temp++;
                if (temp > 3) {
                    temp = 0;
                } else if (temp === 3) {
                    answer++;
                    temp = 0;
                    break;
                }
            }
        }
    }
    return answer;
}

//43. 최댓값 만들기(1)
function solution3(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}

//44. 팩토리얼
function solution4(n) {
    let i = 1;
    let f = 1;
    while (f * i < n) f *= ++i;
    return i;
}

// Day 12. 문자열, 정렬, 사칙연산, 수학
//45. 모음 제거
function solution5(my_string) {
    return my_string.replaceAll(/[aeiou]/g, '');
}

//46. 문자열 정렬하기 (1)
function solution6(my_string) {
    const num = my_string.replaceAll(/[a-z]/g, '').split('');
    return num.sort((a, b) => a - b).map((n) => parseInt(n));
}

//47. 숨어있는 숫자의 덧셈 (1)
function solution7(my_string) {
    var result = 0;
    my_string
        .replace(/[a-z, A-Z]/g, '')
        .split('')
        .map((a) => (result += parseInt(a)));
    return result;
}

//48. 소인수분해
function solution8(n) {
    let answer = [];
    let i = 2;
    while (true) {
        if (n % i === 0) {
            n = n / i;
            answer.push(i);
            i = 1;
        }
        i++;
        if (i > n) {
            break;
        }
    }
    return [...new Set(answer)];
}

// Day 13. 문자열, 배열, 사칙연산, 수학, 조건문
//49. 컨트롤 제트
function solution9(s) {
    const arr = s.split(' ');
    while (arr.indexOf('Z') !== -1) {
        arr.splice(arr.indexOf('Z') - 1, 2);
    }
    return arr.reduce((a, b) => a + Number(b), 0);
}

//50. 배열 원소의 길이
function solution10(strlist) {
    return strlist.map((i) => i.length);
}
