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

function solution2(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, idx) =>
        Math.ceil((100 - progress) / speeds[idx])
    );
    let maxDay = days[0];

    for (let i = 0, j = 0; i < days.length; i++) {
        if (days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}
// 며칠 걸리는지 미리 계산
