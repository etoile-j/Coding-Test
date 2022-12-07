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
