function solution(today, terms, privacies) {
    const termsObj = {};
    for (let p = 0; p < terms.length; p++) {
        termsObj[terms[p][0]] = terms[p].slice(2);
    }

    let answer = [];
    const todayArr = today.split('.');

    for (let i = 0; i < privacies.length; i++) {
        let period = Number(termsObj[privacies[i][11]]);
        let [y, m, d] = privacies[i]
            .slice(0, 10)
            .split('.')
            .map((v) => Number(v));
        let addPeriod = m + period;

        if (addPeriod > 12) {
            if (addPeriod % 12 === 0) {
                y += Math.trunc(addPeriod / 12) - 1;
                m = 12;
            } else {
                y += Math.trunc(addPeriod / 12);
                m = addPeriod % 12;
            }
        } else {
            m += period;
        }

        if (todayArr[0] > y) answer.push(i + 1);
        else if (todayArr[0] == y && Number(todayArr[1]) > m)
            answer.push(i + 1);
        else if (
            todayArr[0] == y &&
            Number(todayArr[1]) == m &&
            Number(todayArr[2]) >= d
        ) {
            answer.push(i + 1);
        }
    }
    return answer;
}
