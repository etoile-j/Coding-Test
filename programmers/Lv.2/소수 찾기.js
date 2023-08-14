function solution(numbers) {
    numbers = numbers.split('');
    let answer = 0;
    let set = new Set();

    const dfs = (lists, rests) => {
        const num = lists.join('');
        if (num > 1) set.add(parseInt(num));

        for (let i = 0; i < rests.length; i++) {
            const rest = [...rests.slice(0, i), ...rests.slice(i + 1)];
            dfs([...lists, rests[i]], rest);
        }
    };

    dfs([], numbers);

    for (const num of set) {
        let check = true;

        for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
            if (num % i === 0) {
                check = false;
                break;
            }
        }
        if (check) answer++;
    }
    return answer;
}
