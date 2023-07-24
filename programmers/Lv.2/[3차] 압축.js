function solution(msg) {
    let answer = [];
    msg = msg.split('');

    const dic = {};
    let dicIdx = 1;
    for (let i = 65; i < 91; i++) {
        dic[String.fromCharCode(i)] = dicIdx++;
    }

    while (msg.length !== 0) {
        let w = msg.shift();

        while (dic[w]) {
            if (dic[w + msg[0]]) w += msg.shift();
            else break;
        }

        answer.push(dic[w]);

        if (msg) dic[w + msg[0]] = dicIdx++;
    }
    return answer;
}
