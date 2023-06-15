function solution(str1, str2) {
    function makeSet(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            if (/[a-zA-Z]{2}/g.test(arr.slice(i, i + 2)))
                newArr.push(arr.slice(i, i + 2).toLowerCase());
        }
        return newArr;
    }
    const a = makeSet(str1);
    const b = makeSet(str2);

    if (a.length === 0 && b.length === 0) return 65536;

    let intersection = [];
    for (let j = 0; j < a.length; j++) {
        if (b.indexOf(a[j]) > -1) {
            intersection.push(...b.splice(b.indexOf(a[j]), 1));
        }
    }

    return Math.trunc((intersection.length / (b.length + a.length)) * 65536);
}
