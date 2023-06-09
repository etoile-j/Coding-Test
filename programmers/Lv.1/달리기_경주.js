function solution(players, callings) {
    let answer = [];
    const nameMap = new Map();
    const rankingMap = new Map();

    players.forEach((v, i) => {
        nameMap.set(v, i);
        rankingMap.set(i, v);
    });

    for (let k = 0; k < callings.length; k++) {
        let ranking = nameMap.get(callings[k]);
        let ChangeName = rankingMap.get(ranking - 1);
        nameMap.set(callings[k], ranking - 1).set(ChangeName, ranking);
        rankingMap.set(ranking, ChangeName).set(ranking - 1, callings[k]);
    }
    rankingMap.forEach((v) => answer.push(v));
    return answer;
}
