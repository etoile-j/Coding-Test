function solution(record) {
    let answer = [];
    const lastNickname = {};

    for (let i = 0; i < record.length; i++) {
        let [_, id, nickname] = record[i].split(' ');
        if (nickname) lastNickname[id] = nickname;
    }

    for (let j = 0; j < record.length; j++) {
        let [type, id, _] = record[j].split(' ');
        if (type === 'Enter')
            answer.push(`${lastNickname[id]}님이 들어왔습니다.`);
        if (type === 'Leave')
            answer.push(`${lastNickname[id]}님이 나갔습니다.`);
    }
    return answer;
}
