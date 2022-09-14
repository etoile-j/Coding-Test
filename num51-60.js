/* 51. merge sort
다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다. */
//시간복잡도 O(N*logN)
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
        console.log(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }

    return result;
}

const array = prompt('배열을 입력하세요')
    .split(' ')
    .map((n) => parseInt(n, 10));

console.log(mergeSort(array));

/* 52. quick sort
다음 빈 칸을 채워 퀵 정렬을 완성해주세요. */
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt('배열을 입력하세요')
    .split(' ')
    .map((n) => parseInt(n, 10));

console.log(quickSort(array));

/* 53. 괄호 문자열
괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다.
그중 괄호의 모양이 바르게 구성된 문자열을 바른 문자열, 그렇지 않은 문자열을 바르지 않은 문자열이라 부르도록 하자.

(())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.

입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자. */

//나
const input = prompt('괄호 문자열을 입력하세요').split('');

if (input.length % 2 === 0 && input[0] === '(' && input.pop() === ')') {
    console.log('YES');
} else {
    console.log('NO');
}
//내가 생각한 규칙 : 짝수면서 양 끝에는 '('랑 ')'가 있어야 한다.

/* 54. 연속되는 수
은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다.
숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다.
그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오
ex)
입력1: 1 2 3 4 5
출력1: YES

입력2: 1 4 2 6 3
출력2: NO      */

//나
const input = prompt('숫자를 공백으로 구분해 입력하세요')
    .split(' ')
    .sort((a, b) => a - b);

const func = () => {
    for (let i = 0; i < input.length - 1; i++) {
        if (parseInt(input[i]) + 1 !== parseInt(input[i + 1])) {
            console.log('NO');
            return;
        }
    }
    console.log('YES');
};

func();

/* 55. 하노이의 탑
하노이의 탑은 A, B, C 3개의 기둥과 기둥에 꽂을 수 있는 N 개의 원판으로 이루어져 있습니다.
이 게임에서는 다음의 규칙을 만족해야 합니다.

1. 처음에 모든 원판은 A 기둥에 꽂혀 있다.
2. 모든 원판의 지름은 다르다.
3. 이 원반은 세 개의 기둥 중 하나에 반드시 꽂혀야 한다.
4. 작은 원판 위에 큰 원반을 놓을 수 없다.
5. 한 번에 하나의 원판(가장 위에 있는 원판)만을 옮길 수 있다.

이 규칙을 만족하며 A 기둥에 있는 원판 N 개를 모두 C 원반으로 옮기고 싶습니다.
모든 원판을 옮기기 위해 실행되어야 할 최소 원반 이동 횟수를 계산하는 프로그램을 완성해 주세요. */
// 2^원판 개수 - 1
const route = [];

function hanoi(num, start, end, temp) {
    //원판이 한 개일 때에는 바로 옮기면 됩니다.
    if (num === 1) {
        route.push([start, end]);
        return NaN;
    }

    //원반이 n-1개를 경유기둥으로 옮기고
    hanoi(num - 1, start, temp, end);
    //가장 큰 원반은 목표기둥으로
    route.push([start, end]);
    //경유기둥과 시작기둥을 바꿉니다.
    hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

/* 56. 객체의 함수 응용
다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요. */
//데이터
nationWidth = {
    korea: 220877,
    Rusia: 17098242,
    China: 9596961,
    France: 543965,
    Japan: 377915,
    England: 242900,
};
//출력
//England 22023

//나
const korea = nationWidth.korea;
delete nationWidth.korea;

const key = Object.keys(nationWidth);
const value = Object.values(nationWidth).map((i) => Math.abs(i - korea));
const minIndex = value.indexOf(Math.min(...value));
console.log(key[minIndex], value[minIndex]);

/* 57. 1의 개수
0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다.
예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에
각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요. */

//나
let box = '';
for (let i = 0; i <= 1000; i++) {
    box += i;
}

let count = 0;
for (let j of box) {
    if (j == 1) {
        count += 1;
    }
}
console.log(count);

/* 58. 콤마 찍기
숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다. */

//나
const input = parseInt(prompt('숫자를 입력해주세요'));
console.log(input.toLocaleString('ko-KR'));
