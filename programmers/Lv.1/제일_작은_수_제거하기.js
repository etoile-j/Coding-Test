function solution(arr) {
    if (arr.length === 1) return [-1];

    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[j]) {
            j = i;
        }
    }
    arr.splice(j, 1);
    return arr;
}
