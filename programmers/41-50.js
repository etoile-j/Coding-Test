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
