function solution(orders, course) {
    orders = orders.map((v) => v.split('').sort().join(''));
    const answer = [];

    for (let i = 0; i < course.length; i++) {
        const collect = {};
        for (let j = 0; j < orders.length; j++) {
            if (orders[j].length > course[i]) {
                dfs(orders[j].split(''), course[i]).forEach((v) => {
                    if (!collect[v]) collect[v] = 1;
                    else collect[v]++;
                });
            }
            if (orders[j].length === course[i]) {
                if (!collect[orders[j]]) collect[orders[j]] = 1;
                else collect[orders[j]]++;
            }
        }

        const max = Math.max(...Object.values(collect));
        if (max > 1) {
            Object.entries(collect).forEach((v, i) => {
                if (v[1] === max) answer.push(v[0]);
            });
        }
    }
    return answer.sort();
}

function dfs(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((v) => [v]);

    arr.forEach((v, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combinations = dfs(rest, selectNumber - 1);
        const attached = combinations.map((combination) =>
            [v, ...combination].join('')
        );
        results.push(...attached);
    });
    return results;
}
