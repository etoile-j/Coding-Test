function solution(park, routes) {
    let now = [];
    park.forEach((row, H) =>
        row.split('').forEach((item, W) => {
            if (item === 'S') now.push(H, W);
        })
    );

    const arrow = { N: [-1, 0], S: [1, 0], W: [0, -1], E: [0, 1] };

    for (let i = 0; i < routes.length; i++) {
        let Xsign = true;
        let [route, num] = [routes[i][0], routes[i][2]];

        let preH = now[0] + arrow[route][0] * num;
        let preW = now[1] + arrow[route][1] * num;
        if (
            preH < 0 ||
            preH >= park.length ||
            preW < 0 ||
            preW >= park[0].length
        )
            continue;

        for (let j = 0; j < num; j++) {
            let h = now[0] + arrow[route][0] * (j + 1);
            let w = now[1] + arrow[route][1] * (j + 1);

            if (park[h][w] === 'X') {
                Xsign = false;
                break;
            }
        }

        if (Xsign) now = [preH, preW];
    }
    return now;
}
