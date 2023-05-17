// * LRU (least Recently Used)
// 페이지 교체 알고리즘. 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식

function solution(cacheSize, cities) {
    let cacheTime = 0;
    let cache = [];

    for (let city of cities) {
        city = city.toUpperCase();
        if (cache.indexOf(city) === -1) {
            cacheTime += 5;
        } else {
            cache.splice(cache.indexOf(city), 1);
            cacheTime++;
        }
        cache.push(city);

        if (cacheSize < cache.length) cache.shift();
    }
    return cacheTime;
}
