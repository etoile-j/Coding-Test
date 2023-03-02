function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => a - b);
    }
    //const sorted = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    const w = sizes.map((i) => i[0]);
    const h = sizes.map((i) => i[1]);
    return Math.max(...w) * Math.max(...h);
}
