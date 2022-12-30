//31. 진료순서 정하기
function solution1(emergency) {
    var answer = [];
    const sort = [...emergency].sort((a, b) => b - a);
    for (let i = 0; i < sort.length; i++) {
        answer.push(sort.indexOf(emergency[i]) + 1);
    }
    return answer;
}

//32. 순서쌍의 개수
function solution2(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer++;
        }
    }
    return answer;
}

// Day 9. 수학, 문자열, 해시, 완전탐색, 조건문
//33. 개미 군단
function solution3(hp) {
    switch (hp % 5) {
        case 0:
            return hp / 5;
        case 1:
        case 3:
            return Math.floor(hp / 5) + 1;
        case 2:
        case 4:
            return Math.floor(hp / 5) + 2;
    }
}

//34. 모스부호 (1)
function solution4(letter) {
    const morse = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
    };
    var answer = '';
    const arr = letter.split(' ');
    for (let i of arr) {
        answer += morse[i];
    }
    return answer;
}

//35. 가위 바위 보
function solution5(rsp) {
    var answer = '';

    for (let i of rsp) {
        switch (i) {
            case '0':
                answer += '5';
                break;
            case '2':
                answer += '0';
                break;
            case '5':
                answer += '2';
        }
    }
    return answer;
}

//36. 구슬을 나누는 경우의 수
function solution6(balls, share) {
    function fac(num) {
        let n = BigInt(num);
        if (n <= BigInt(0)) {
            return BigInt(1);
        } else {
            return n * fac(n - BigInt(1));
        }
    }
    return fac(balls) / (fac(balls - share) * fac(share));
}

// Day 10. 조건문, 배열, 수학, 시뮬레이션
//37. 점의 위치 구하기
function solution7(dot) {
    if (dot[0] > 0 && dot[1] > 0) {
        return 1;
    } else if (dot[0] < 0 && dot[1] > 0) {
        return 2;
    } else if (dot[0] < 0 && dot[1] < 0) {
        return 3;
    } else {
        return 4;
    }
}

//38. 2차원으로 만들기
function solution8(num_list, n) {
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) {
        answer.push(num_list.slice(i, i + n));
    }
    return answer;
}

//39. 공 던지기
function solution9(numbers, k) {
    return numbers[(2 * (k - 1)) % numbers.length];
}

//40. 배열 회전시키기
function solution10(numbers, direction) {
    if (direction === 'right') {
        const num = numbers.splice(numbers.length - 1, 1);
        numbers.unshift(...num);
    } else {
        const num = numbers.splice(0, 1);
        numbers.push(...num);
    }
    return numbers;
}
