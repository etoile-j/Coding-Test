function solution(N, stages) {
    let failArr = [];
    let deno = {};
    for (const stage of stages) {
        deno[stage] = (deno[stage] || 0) + 1;
    }

    for (let i = 1; i <= N; i++) {
        let fail = (deno[i] | 0) / stages.filter((n) => n >= i).length;
        failArr.push({ stage: i, fail: fail });
    }

    return failArr.sort((a, b) => b.fail - a.fail).map((v) => v.stage);
}

function solution2(N, stages) {
    let failArr = [];
    let deno = {};
    for (const stage of stages) {
        deno[stage] = (deno[stage] || 0) + 1;
    }

    for (let i = 1; i <= N; i++) {
        let fail = (deno[i] | 0) / stages.filter((n) => n >= i).length;
        failArr.push([i, fail]);
    }

    return failArr.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
// [{}, {}...] 대신 [[], []...]로 풀면
