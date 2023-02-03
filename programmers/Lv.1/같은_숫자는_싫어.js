function solution(arr) {
    let newArr = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (newArr[newArr.length - 1] !== arr[i]) newArr.push(arr[i]);
    }
    return newArr;
}

function solution2(arr) {
    return arr.filter((num, idx) => num !== arr[idx + 1]);
}
