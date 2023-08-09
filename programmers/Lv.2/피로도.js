function solution(k, dungeons) {
    const list = dungeons.map((_, index) => index);
    let maxCount = 0;

    const dfs = (lists, rests) => {
        if (rests.length === 0) counter(k, lists);

        for (let i = 0; i < rests.length; i++) {
            const rest = [...rests.slice(0, i), ...rests.slice(i + 1)];
            dfs([...lists, rests[i]], rest);
        }
    };

    const counter = (k, dfsList) => {
        let count = 0;

        for (let i = 0; i < dfsList.length; i++) {
            const [minimum, use] = dungeons[dfsList[i]];
            if (k >= minimum && k >= use) {
                k -= use;
                count++;
                if (count > maxCount) maxCount = count;
            } else return;
        }
    };

    dfs([], list);
    return maxCount;
}
