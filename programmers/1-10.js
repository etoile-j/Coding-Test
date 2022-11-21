// Day 1. 사칙연산
//1. 두수의 합
function solution1(num1, num2) {
    const answer = num1 + num2;
    return answer;
}

//2. 두수의 차
function solution2(num1, num2) {
    const answer = num1 - num2;
    return answer;
}

//3. 두수의 곱
function solution3(num1, num2) {
    const answer = num1 * num2;
    return answer;
}

//4. 몫 구하기
function solution4(num1, num2) {
    return parseInt(num1 / num2);
}

// Day 2. 사칙연산, 조건문, 배열
//5. 두 수의 나눗셈
function solution5(num1, num2) {
    var answer = (num1 / num2) * 1000;
    return parseInt(answer);
}

//6. 숫자 비교하기
function solution6(num1, num2) {
    return num1 === num2 ? 1 : -1;
}

//7. 분수의 덧셈
function solution7(denum1, num1, denum2, num2) {
    let num = 0;
    let denum = 0;
    let divisor = 0;
    if (num1 === num2) {
        num = num1;
        denum = denum1 + denum2;
        uc(num, denum);
    } else {
        num = num1 * num2;
        denum = denum1 * num2 + denum2 * num1;
        uc(num, denum);
    }

    function uc(num, denum) {
        if (num < denum) {
            let temp = num;
            num = denum;
            denum = temp;
        }
        if (num % denum === 0) {
            return (divisor = denum);
        } else {
            return uc(denum, num % denum);
        }
    }
    return [denum / divisor, num / divisor];
}

//8. 배열 두 배 만들기
function solution8(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        answer.push(numbers[i] * 2);
    }
    return answer;
}
