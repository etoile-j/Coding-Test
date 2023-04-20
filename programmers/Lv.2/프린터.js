function solution(priorities, location) {
    let answer = 0;
    let indexArr = Array.from({ length: priorities.length }, (_, i) => i);
    let max = Math.max(...priorities);

    while (priorities.length !== 0) {
        if (priorities[0] !== max) {
            indexArr.push(indexArr[0]);
            indexArr.shift();
            priorities.push(priorities[0]);
            priorities.shift();
        } else {
            answer++;
            if (indexArr[0] == location) return answer;
            else indexArr.shift();
            priorities.shift();
            max = Math.max(...priorities);
        }
    }
}
