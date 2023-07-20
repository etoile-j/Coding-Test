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
// 방문 좌표가 아니라 '경로'를 기록해 나가야 함

function solution2(dirs) {
    let arrow = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
    let now = [0, 0];
    let set = new Set();

    for (let dir of dirs) {
        // 여기서 미리 증가시켜서
        let nowX = now[0] + arrow[dir][0];
        let nowY = now[1] + arrow[dir][1];

        // 체크
        if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;

        // 체크 통과하면 집합에 넣음
        set.add('' + now[0] + now[1] + nowX + nowY);
        set.add('' + nowX + nowY + now[0] + now[1]);

        // 집합에
        now = [nowX, nowY];
    }

    return set.size / 2;
}
// 방향 명령어를 객체화
