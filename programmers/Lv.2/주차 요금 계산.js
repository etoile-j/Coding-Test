function solution(fees, records) {
    const recordsObj = {};
    const carNums = [];
    for (let i = 0; i < records.length; i++) {
        let record = records[i].split(' ');
        if (recordsObj[record[1]] === undefined) {
            carNums.push(record[1]);
            recordsObj[record[1]] = { IN: [record[0]], OUT: [] };
        } else {
            if (record[2] === 'OUT') recordsObj[record[1]].OUT.push(record[0]);
            else recordsObj[record[1]].IN.push(record[0]);
        }
    }

    carNums.sort((a, b) => a - b);
    let answer = [];
    for (let j = 0; j < carNums.length; j++) {
        let times = 0;
        for (let k = 0; k < recordsObj[carNums[j]].IN.length; k++) {
            if (recordsObj[carNums[j]].OUT[k] === undefined) times += 1439;
            else {
                let time = recordsObj[carNums[j]].OUT[k].split(':');
                times += time[0] * 60 + Number(time[1]);
            }
            let time = recordsObj[carNums[j]].IN[k].split(':');
            times -= time[0] * 60 + Number(time[1]);
        }
        answer.push(times);
    }

    for (let l = 0; l < answer.length; l++) {
        if (answer[l] <= fees[0]) answer[l] = fees[1];
        else
            answer[l] =
                fees[1] + Math.ceil((answer[l] - fees[0]) / fees[2]) * fees[3];
    }
    return answer;
}

function solution2(fees, records) {
    const recordsObj = {};
    for (let i = 0; i < records.length; i++) {
        let record = records[i].split(' ');
        let [h, m] = record[0].split(':');
        let time = Number(h) * 60 + Number(m);
        if (recordsObj[record[1]] === undefined)
            recordsObj[record[1]] = 1439 - time;
        else if (record[2] === 'IN') recordsObj[record[1]] += 1439 - time;
        else recordsObj[record[1]] -= 1439 - time;
    }

    const answer = Object.keys(recordsObj).sort((a, b) => a - b);
    for (let j = 0; j < answer.length; j++) {
        if (recordsObj[answer[j]] <= fees[0]) answer[j] = fees[1];
        else
            answer[j] =
                fees[1] +
                Math.ceil((recordsObj[answer[j]] - fees[0]) / fees[2]) *
                    fees[3];
    }
    return answer;
}
