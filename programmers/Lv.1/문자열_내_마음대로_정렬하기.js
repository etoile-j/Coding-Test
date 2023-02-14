function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] == b[n]) {
            return a > b ? 1 : -1;
        } else {
            return a[n] > b[n] ? 1 : -1;
        }
    });
}
// 속도 더 빠르다.

function solution2(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] == b[n]) {
            return a.localeCompare(b);
        } else {
            return a[n].localeCompare(b[n]);
        }
    });

    // return strings.sort((a, b) =>
    //     a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
    // );
}

// String.prototype.localeCompare()
//localeCompare(compareString)
//compareString: 비교대상 문자열

// 예시
// "a"는 "c" 전에 위치하므로 음수 값을 반환
'a'.localeCompare('c'); // -2 혹은 -1 (또는 다른 음수 값)

// 알파벳 순으로 단어 "check"는 "against"보다 뒤에 위치하므로 양수 값을 반환
'check'.localeCompare('against'); // 2 혹은 1 (또는 다른 양수 값)

// "a"와 "a"는 서로 동등하므로 중립 값 0을 반환
'a'.localeCompare('a'); // 0
