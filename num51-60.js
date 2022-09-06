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
