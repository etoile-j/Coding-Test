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

function solution2(orders, course) {
    const ordered = {};
    const candidates = {};
    const max = Array(10 + 1).fill(0);
    const dfs = (arr, start, len, foods) => {
        if (len === 0) {
            ordered[foods] = (ordered[foods] || 0) + 1;
            if (ordered[foods] > 1) candidates[foods] = ordered[foods];
            max[foods.length] = Math.max(max[foods.length], ordered[foods]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            dfs(arr, i + 1, len - 1, foods + arr[i]);
        }
    };

    orders.forEach((od) => {
        const sorted = od.split('').sort();
        course.forEach((len) => {
            dfs(sorted, 0, len, '');
        });
    });

    const answer = Object.keys(candidates).filter(
        (food) => max[food.length] === candidates[food]
    );

    return answer.sort();
}
