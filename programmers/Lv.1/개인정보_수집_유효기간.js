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
// privacies + terms 한 거랑 today를 년, 월, 일 각 각 비교해서 지났을 경우 answer 배열에 푸시
// 년월일을 다 일로 풀어서 계산하는 방법도 있음

// Date 객체 활용 풀이
function solution2(today, terms, privacies) {
    const answer = [];
    today = new Date(today);
    const termsObj = {};
    for (let p = 0; p < terms.length; p++) {
        termsObj[terms[p][0]] = Number(terms[p].slice(2));
    }

    for (const i in privacies) {
        let [day, term] = privacies[i].split(' ');
        day = new Date(day);

        day.setMonth(day.getMonth() + termsObj[term]);

        if (today >= day) answer.push(Number(i) + 1);
    }
    return answer;
}
