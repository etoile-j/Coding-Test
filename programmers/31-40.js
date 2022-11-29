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
