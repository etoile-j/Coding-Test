function solution(lottos, win_nums) {
    const rank = [6, 5, 4, 3, 2];

    const match = lottos.filter((num) => win_nums.includes(num)).length;
    const zero = lottos.filter((num) => num === 0).length;

    const minimum = rank.indexOf(match) > -1 ? rank.indexOf(match) + 1 : 6;
    const maximum =
        rank.indexOf(match + zero) > -1 ? rank.indexOf(match + zero) + 1 : 6;

    return [maximum, minimum];
}
