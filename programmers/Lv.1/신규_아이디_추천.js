function solution(new_id) {
    new_id = new_id
        .toLowerCase()
        .replace(/[^\w\d-_\.]/g, '')
        .replace(/\.{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/, 'a')
        .slice(0, 15)
        .replace(/\.$/g, '');

    return new_id.padEnd(3, new_id[new_id.length - 1]);
}
