function solution1(s) {
    let p = 0;
    let y = 0;
    const arr = s.toLowerCase().split('');

    for (let i of arr) {
        if (i === 'p') {
            p++;
        } else if (i === 'y') {
            y++;
        }
    }
    return p === y ? true : false;
}

function solution2(s) {
    return s.match(/p/gi).length == s.match(/y/gi).length;
}
