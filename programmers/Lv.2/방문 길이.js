function solution(dirs) {
    const set = new Set();
    let [x, y] = [0, 0];

    for (let i = 0; i < dirs.length; i++) {
        let cur = `${x}${y}`;

        switch (dirs[i]) {
            case 'U':
                if (y === 5) continue;
                y++;
                break;
            case 'D':
                if (y === -5) continue;
                y--;
                break;
            case 'R':
                if (x === 5) continue;
                x++;
                break;
            case 'L':
                if (x === -5) continue;
                x--;
                break;
        }
        set.add(`${cur}${x}${y}`).add(`${x}${y}${cur}`);
    }

    return set.size / 2;
}
