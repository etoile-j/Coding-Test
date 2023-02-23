function solution(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        let temp = Math.trunc(food[i] / 2);
        if (temp !== 0) {
            answer += String(i).repeat(temp);
        }
    }
    return answer + '0' + [...answer].reverse().join('');
}
