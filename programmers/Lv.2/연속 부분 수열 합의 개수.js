function solution(elements) {
    let answer = 0;
    const circle = elements.concat(elements);
    const set = new Set();
    for (let i = 1; i < elements.length; i++) {
        for (let j = 0; j < elements.length; j++) {
            const Sumlength = circle.slice(j, j + i).reduce((acc, cur) => {
                return (acc += cur);
            }, 0);
            set.add(Sumlength);
        }
    }
    answer = set.size + 1;
    return answer;
}
