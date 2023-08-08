function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const reportObj = {};
    const badIdCount = {};

    for (let i = 0; i < id_list.length; i++) {
        reportObj[id_list[i]] = [];
    }

    for (let i = 0; i < report.length; i++) {
        const [id, badId] = report[i].split(' ');
        if (!reportObj[id].includes(badId)) {
            reportObj[id].push(badId);
            if (!badIdCount[badId]) badIdCount[badId] = 1;
            else badIdCount[badId]++;
        }
    }

    const banList = Object.keys(badIdCount).filter((v) => badIdCount[v] >= k);

    for (let i = 0; i < id_list.length; i++) {
        for (let j = 0; j < reportObj[id_list[i]].length; j++) {
            if (banList.includes(reportObj[id_list[i]][j])) answer[i]++;
        }
    }

    return answer;
}

function solution2(id_list, report, k) {
    const reports = [...new Set(report)].map((v) => v.split(' '));

    const badIdCount = {};
    for (const report of reports) {
        if (!badIdCount[report[1]]) badIdCount[report[1]] = 1;
        else badIdCount[report[1]]++;
    }

    const good = new Map();
    for (const report of reports) {
        if (badIdCount[report[1]] >= k) {
            good.set(report[0], good.get(report[0]) + 1 || 1);
        }
    }

    let answer = id_list.map((a) => good.get(a) || 0);
    return answer;
}
