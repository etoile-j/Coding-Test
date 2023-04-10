function solution(progresses, speeds) {
    let answer = [];
    let perDay = 0;
    const pLeng = progresses.length;

    function day() {
        for (let i = 0; i < progresses.length; i++) {
            progresses[i] += speeds[i];
        }

        if (progresses[0] > 99) {
            perDay = 0;
            for (let j = 0; j < pLeng; j++) {
                if (progresses[0] > 99) {
                    perDay++;
                    progresses.shift();
                    speeds.shift();
                } else break;
            }
            answer.push(perDay);
        } else day();
    }

    while (progresses.length !== 0) {
        day();
    }

    return answer;
}
