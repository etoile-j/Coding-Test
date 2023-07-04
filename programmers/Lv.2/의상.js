function solution(clothes) {
    let answer = 1;
    const obj = {};
    clothes.forEach((v) => {
        obj[v[1]] = (obj[v[1]] || 0) + 1;
    });

    const count = Object.values(obj);

    count.forEach((v) => {
        answer *= v + 1;
    });

    return answer - 1;
}
