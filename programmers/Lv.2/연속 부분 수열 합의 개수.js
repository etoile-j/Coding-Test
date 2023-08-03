function solution(elements) {
    const circle = elements.concat(elements);
    const set = new Set();

    for (let i = 1; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            set.add(
                circle.slice(j, j + i).reduce((acc, cur) => (acc += cur), 0)
            );
        }
    }

    return set.size + 1;
}

function solution2(elements) {
    const circle = elements.concat(elements);
    const set = new Set();
    for (let i = 0; i < elements.length; i++) {
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {
            sum += circle[i + j];
            set.add(sum);
        }
    }
    return set.size;
}
// 각 원소를 시작점으로 하나씩 더해가는 방법
